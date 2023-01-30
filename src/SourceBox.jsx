import React from "react";
import { DragSource } from "react-dnd";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem",
  margin: "0.5rem"
};

const SourceBoxRaw = ({ name, connectDragSource, forbidDrag }) => {
  const localStyle = { ...style, cursor: forbidDrag ? "default" : "move" };
  return connectDragSource(<div style={localStyle}>{name}</div>);
};

// drag source
// see http://react-dnd.github.io/react-dnd/docs/api/drag-source
const SourceBox = DragSource(
  // type
  "foo",
  // spec
  // see http://react-dnd.github.io/react-dnd/docs/api/drag-source#drag-source-specification
  {
    canDrag: props => !props.forbidDrag,
    beginDrag: () => ({})
  },
  // collecting function
  // injects a prop
  connect => ({ connectDragSource: connect.dragSource() })
)(SourceBoxRaw);

export default SourceBox;
