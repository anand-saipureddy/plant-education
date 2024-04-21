import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const TopicPage = () => {
  const { topicId } = useParams();
  const [chapters, setChapters] = useState([
    { id: 'intro', name: 'Introduction', topicId: 'pathology' }
  ]);

  return (
    <div>
      <h1>Chapters in {topicId}</h1>
      <ul>
        {chapters.filter(chapter => chapter.topicId === topicId).map(chapter => (
          <li key={chapter.id}>
            <Link to={`/chapter/${chapter.id}`}>{chapter.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicPage;