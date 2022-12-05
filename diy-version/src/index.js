import React from "react";
import { hydrateRoot } from "react-dom/client";

import App from "./App";

const comments = new Promise((resolve) => {
  window.setComments = (comments) => resolve(comments);
});

hydrateRoot(
  document.getElementById("app"),
  <App comments={comments} description={window.__data.description} />
);
