import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicSelect }) => {
  const handleClick = () => {
    onTopicSelect(topic.id);
  };

  return (
    <button onClick={handleClick} className="topic-list__item">
      <strong>{topic.title}</strong>
    </button>
  );
};

export default TopicListItem;
