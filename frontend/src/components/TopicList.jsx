import React from "react";
import TopicListItem from "./TopicListItem";
import useApplicationData from '../hooks/useApplicationData';
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    label: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    label: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    label: "Food",
  },
  // Add more topics as needed
];

const TopicList = () => {
  return (
    <div className="topic-list">
      {sampleDataForTopicList.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;
