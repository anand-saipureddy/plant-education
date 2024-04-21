import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TopicPage from './TopicPage';
import ChapterPage from './ChapterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/chapter/:chapterId" element={<ChapterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
