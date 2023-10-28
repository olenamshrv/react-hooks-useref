import "./index.css";

import Grid from "../grid";

import { memo } from "react";

function Component({ username, text, date }) {
  return (
    <Grid>
      <div className="post-content">
        <span className="post-content__username">@{username}</span>
        <span className="post-content__date">{date}</span>
      </div>

      <p className="post-content__text">{text}</p>
    </Grid>
  );
}

export default memo(Component);