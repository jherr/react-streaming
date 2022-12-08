import * as React from "react";
import { renderToString } from "react-dom/server";

import Html from "../src/Html";
import App from "../src/App";

const fetchDescription = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Product information ready for SEO"), 250)
  );

const commentsFetch = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Comment 1", "Comment 2", "Comment 3"]), 2000)
  );

async function render(res) {
  const description = await fetchDescription();
  const comments = await commentsFetch();

  res.send(
    renderToString(
      <Html description={description} comments={comments}>
        <App description={description} comments={comments} />
      </Html>
    )
  );
}

export default render;
