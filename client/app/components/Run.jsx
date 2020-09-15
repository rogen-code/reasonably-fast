import React from "react";

function Run(props) {
  return (
    <div>
      You ran for {Math.round(props.distance / 1609)} miles.
    </div>
  )
}

export default Run;