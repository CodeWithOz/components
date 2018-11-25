import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Jane" timeAgo="Today at 4:45PM"
        commentText="Awesome!"
      />
      <CommentDetail
        author="Alex" timeAgo="Today at 2:00PM"
        commentText="Nice blog post!"
      />
      <CommentDetail
        author="Sam" timeAgo="Yesterday at 5:00PM"
        commentText="I love this! 😄"
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
