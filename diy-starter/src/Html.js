import * as React from "react";

export default ({ children, comments, description }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/index.css" />
      </head>

      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
};
