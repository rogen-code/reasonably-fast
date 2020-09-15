import React from "react";

function Cross(props) {
  return (
    <div>
      You cross trained for {Math.round(props.time/60)} minutes.
    </div>
  )
}

export default Cross;