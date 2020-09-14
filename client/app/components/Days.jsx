import React from "react";
import moment from 'moment';
import { halHigdonNovice1 } from '../../../runningPlan.js'

function Days(props) {
  var monthNum = moment.months().indexOf(props.month)
  var time = moment([props.year, monthNum, props.num])
  var diff = props.raceDate.diff(time, 'days')

  return (
    <td key={props.key}>
      {props.num} {props.month} {props.year} {halHigdonNovice1[diff]}
    </td>
  )
}

export default Days;