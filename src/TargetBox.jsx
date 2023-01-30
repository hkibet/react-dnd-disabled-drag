// tslint:disable max-classes-per-file
import React, { useState, useCallback } from 'react'
import { DropTarget } from 'react-dnd'
// import Colors from './Colors'

const style = {
  border: '1px solid gray',
  height: '5rem',
  width: '4rem',
  padding: '1rem',
  textAlign: 'center',
  margin: '1em 0'
}

const TargetBoxRaw = ({
  canDrop,
  isOver,
  itemType,
  lastDroppedColor,
  connectDropTarget,
}) => {
  const opacity = isOver ? 1 : 0.7
  let backgroundColor = '#fff'
  switch (itemType) {
    case "foo":
      backgroundColor = 'lightblue'
      break
    default:
      break
  }
  // switch (itemType) {
  //   case Colors.BLUE:
  //     backgroundColor = 'lightblue'
  //     break
  //   case Colors.YELLOW:
  //     backgroundColor = 'lightgoldenrodyellow'
  //     break
  //   default:
  //     break
  // }
  return connectDropTarget(
    <div style={Object.assign({}, style, { backgroundColor, opacity })}>
      <p>Drop here.</p>

      {!canDrop && lastDroppedColor && <p>Last dropped: {lastDroppedColor}</p>}
    </div>,
  )
}

const TargetBox = DropTarget(
  // [Colors.YELLOW, Colors.BLUE],
  "foo",
  {
    drop(props, monitor) {
      props.onDrop(monitor.getItemType())
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
  }),
)(TargetBoxRaw)

const StatefulTargetBox = props => {
  const [lastDroppedColor, setLastDroppedColor] = useState(null)
  const handleDrop = useCallback(color => setLastDroppedColor(color), [])
  return (
    <TargetBox
      {...props}
      lastDroppedColor={lastDroppedColor}
      onDrop={handleDrop}
    />
  )
}

export default StatefulTargetBox
