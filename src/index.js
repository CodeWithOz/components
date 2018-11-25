import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Jane" timeAgo="Today at 4:45PM"
        commentText="Awesome!" avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex" timeAgo="Today at 2:00PM"
        commentText="Nice blog post!" avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Sam" timeAgo="Yesterday at 5:00PM"
        commentText="I love this! 😄" avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
