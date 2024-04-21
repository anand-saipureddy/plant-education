import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const topics = [{ id: 'pathology', name: 'Plant Pathology' }, { id: 'physiology', name: 'Plant Physiology' }];

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <Link to={`/topic/${topic.id}`}>{topic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;