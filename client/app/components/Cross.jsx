import React from "react";

function Cross(props) {
  return (
    <div class="cross-train">
      You cross trained for {Math.round(props.time/60)} minutes.
    </div>
  )
}

export default Cross;