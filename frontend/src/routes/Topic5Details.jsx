import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Topic5Details = () => {
  const { topicId } = useParams();
  const [topicDetails, setTopicDetails] = useState(null);

  useEffect(() => {
    // Fetch topic details for Topic 1 using the provided endpoint
    fetch(`http://localhost:8001/api/photos`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTopicDetails(data);
      })
      .catch(error => {
        console.error(`Error fetching topic details for Topic 1:`, error);
      });
  }, [topicId]);

  // Render the fetched topic details
  return (
    <div className="topic-details">
      {topicDetails ? (
        <div>
          <h2>{topicDetails.title}</h2>
          <div className="photo-list">
            {topicDetails.map(photo => (
              <div key={photo.id} className="photo-card">
                <img src={photo.urls.full} alt={`${photo.user.name}`} />
                <div className="photo-user">
                  {photo.user.name} (@{photo.user.username})
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};


export default Topic5Details;
