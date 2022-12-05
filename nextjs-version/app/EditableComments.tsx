"use client";

import { useState } from "react";

function EditableComments({
  comments: originalComments,
}: {
  comments: string[];
}) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(originalComments);

  return (
    <div>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        onClick={() => {
          setComments([...comments, newComment]);
          setNewComment("");
        }}
      >
        Add Comment
      </button>
    </div>
  );
}

export default EditableComments;
