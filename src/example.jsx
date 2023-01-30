import React from "react";
import SourceBox from "./SourceBox";
import TargetBox from "./TargetBox";

export default () => (
  <div>
    <div style={{ float: "left", border: "1px solid black", margin: "1em" }}>
      <SourceBox name="Hello" forbidDrag />
      <SourceBox name="World" />
    </div>
    <div style={{ float: "left", border: "1px solid black", margin: "1em" }}>
      <TargetBox name="Drag Here" />
    </div>
  </div>
);
