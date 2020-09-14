import React from "react";
import Run from './Run.jsx';
import Cross from './Cross.jsx';

function WorkoutInfo(props) {

  return (
    <div>
      {props.data.map((workout) => {
        return workout['type'] === "Run"
         ? <Run distance={workout['distance']} />
         : <Cross time={workout['elapsed_time']} />
      })}
    </div>
  )
}

export default WorkoutInfo;