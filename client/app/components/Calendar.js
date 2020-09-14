import React from "react";
import moment from 'moment';
import MonthPicker from './Month.jsx';
import Days from './Days.jsx';
moment().format();


export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
      allmonths: moment.months(),
      raceDate: [2020, 11, 6]
    }
    this.monthClick = this.monthClick.bind(this);
  }

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                  .startOf("month")
                  .format("d")
    return firstDay;
  }

  month = () => {
    return this.state.dateObject.format("MMMM");
  };

  year = () => {
    return this.state.dateObject.format("YYYY")
  }

  selected = () => {
    return this.state.dateObject.format("YYYY-MM")
  }

  monthClick = (month) => {
    let monthNum = moment.months().indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNum);
    this.setState({
      dateObject
    })
  }

  render() {
    let weekdayshort = moment.weekdaysShort();
    let daysthismonth = moment(this.selected()).daysInMonth();

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
      <td>{""}</td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= daysthismonth; d++) {
      daysInMonth.push(
        <Days
          key={d}
          num={d}
          month={this.month()}
          year={this.year()}
          raceDate={moment(this.state.raceDate)}
        />
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];

    let calendar = [];

    for (let i = 0; i < 5; i++) {
      calendar.push(
        <tr>
          <td>{totalSlots[i * 7 + 0]}</td>
          <td>{totalSlots[i * 7 + 1]}</td>
          <td>{totalSlots[i * 7 + 2]}</td>
          <td>{totalSlots[i * 7 + 3]}</td>
          <td>{totalSlots[i * 7 + 4]}</td>
          <td>{totalSlots[i * 7 + 5]}</td>
          <td>{totalSlots[i * 7 + 6]}</td>
        </tr>
      )
    }

    return (
    <>
      {this.month()}
      <MonthPicker onClick={this.monthClick}/>
      <table>
        <tr>
          {weekdayshort.map((day) =>
            <th key={day}>
              {day}
            </th>
            )}
        </tr>
      {calendar}
      </table>
    </>
    )
  }
}

