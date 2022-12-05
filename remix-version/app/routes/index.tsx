import { useState, Suspense, use } from "react";
import { useLoaderData } from "@remix-run/react";
import { defer } from "@remix-run/node";

import styles from "../../styles/global.css";

const fetchDescription = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Product information ready for SEO"), 100)
  );

const commentsFetch = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Comment 1", "Comment 2", "Comment 3"]), 2000)
  );

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader() {
  const description = await fetchDescription();
  const comments = commentsFetch() as Promise<string[]>;

  return defer({
    description,
    comments,
  });
}

function Comments({ comments: commentsPromise }: { comments: string[] }) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<string[]>(use(commentsPromise));

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
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

export default function Index() {
  const { description, comments } = useLoaderData();

  return (
    <div>
      <header>Header</header>

      <h2>Product Description</h2>
      <p>{description}</p>

      <h2>Comments</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Comments comments={comments} />
      </Suspense>

      <footer>Footer</footer>
    </div>
  );
}
