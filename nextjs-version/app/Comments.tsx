import EditableComments from "./EditableComments";

const commentsFetch = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Comment 1", "Comment 2", "Comment 3"]), 2000)
  );

async function Comments() {
  const comments = (await commentsFetch()) as string[];

  return <EditableComments comments={comments} />;
}

export default Comments;
