import React  from 'react';
import UpcomingRaces from './UpcomingRaces.jsx'

function RacePicker(props) {
  return (
    <div className="outer-picker">
      <UpcomingRaces upcomingRace={props.upcomingRace} x={props.x}/>
    </div>
  )
}

export default RacePicker;