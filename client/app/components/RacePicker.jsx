import React  from 'react';
import UpcomingRaces from './UpcomingRaces.jsx'
// import AddRaces from './AddRaces.jsx'


function RacePicker(props) {

  return (
    <div>
      <UpcomingRaces upcomingRace={props.upcomingRace} x={props.x}/>
      {/* <AddRaces /> */}
    </div>
  )

}

export default RacePicker;