import * as React from "react";
import { useState } from "react";

function Comments({ comments: originalComments }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(originalComments);

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>

      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={() => {
          setComments([...comments, comment]);
          setComment("");
        }}
      >
        Add Comment
      </button>
    </div>
  );
}

export default function App(props) {
  return (
    <>
      <header>Header</header>

      <h2>Product Description</h2>
      <p>{props.description}</p>

      <h2>Comments</h2>
      <Comments {...props} />

      <footer>Footer</footer>
    </>
  );
}
