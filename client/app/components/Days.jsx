import React from "react";
import moment from 'moment';
import { halHigdonNovice1 } from '../../../runningPlan.js'
import WorkoutInfo from './WorkoutInfo.jsx'

function Days(props) {
  var monthNum = moment.months().indexOf(props.month)
  var time = moment([props.year, monthNum, props.num])
  var diff = props.raceDate.diff(time, 'days')
  let newData = props.data.filter((workout) => {
    return workout.start_date_local.substring(8,10) === props.num.toString().padStart(2, '0');
  })

  console.log(newData, props.num)

  return (
    <td key={props.key}>
      {props.num}
      {props.month}
      {props.year}
      {halHigdonNovice1[diff]}
      <WorkoutInfo data={newData} />
    </td>
  )
}

export default Days;