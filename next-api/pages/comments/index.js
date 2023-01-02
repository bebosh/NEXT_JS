import { useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };
  return (
    <>
      <div>
        <h1>Comments Page</h1>
      </div>
      <div>
        <button onClick={fetchComments}>Fetch Comments</button>
      </div>

      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default CommentsPage;
