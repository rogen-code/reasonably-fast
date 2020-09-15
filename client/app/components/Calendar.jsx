import React from "react";
import moment from 'moment';
import axios from 'axios';
import MonthPicker from './Month.jsx';
import Days from './Days.jsx';
moment().format();

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
      allmonths: moment.months(),
      data: [],
      raceDate: [2020, 11, 6],
    }
    this.getAthleteData = this.getAthleteData.bind(this);
    this.monthClick = this.monthClick.bind(this);
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
    this.month = this.month.bind(this);
    this.year = this.year.bind(this);
    this.selected = this.selected.bind(this);
    this.firstDayOfMonthUnix = this.firstDayOfMonthUnix.bind(this);
    this.lastDayOfMonthUnix = this.lastDayOfMonthUnix.bind(this);
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
    }, this.getAthleteData)
  }

  firstDayOfMonthUnix = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                  .startOf('month')
                  .format('X')
      return firstDay
  }

  lastDayOfMonthUnix = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                  .endOf('month')
                  .format('X')
      return firstDay
  }

  getAthleteData = () => {
    let start = this.firstDayOfMonthUnix()
    let end =  this.lastDayOfMonthUnix()

    axios.get(`/calendar/${start}/${end}`)
    .then((response) => {
      this.setState({
        data: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  updateDay() {
    if (this.props.upcomingRace) {
      let date = this.props.upcomingRace.split('/');
      date[0] = Number(date[0]) - 1;
      let temp = date[0];
      let temp1 = Number(date[1])
      date[0] = Number(date[2]);
      date[1] = temp
      date[2] = temp1
      console.log(date)
      this.setState({
        raceDate: date
      })
    }
  }

  componentDidMount() {
    this.getAthleteData();
  }

  componentDidUpdate(prevProps){
    if (this.props.upcomingRace !== prevProps.upcomingRace) {
      this.updateDay()
    }
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
          data={this.state.data}
        />
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];

    let calendar = [];

    for (let i = 0; i < 5; i++) {
      calendar.push(
        <tr>
          <td className="day-box-top">{totalSlots[i * 7 + 0]}</td>
          <td className="day-box-top">{totalSlots[i * 7 + 1]}</td>
          <td className="day-box-top">{totalSlots[i * 7 + 2]}</td>
          <td className="day-box-top">{totalSlots[i * 7 + 3]}</td>
          <td className="day-box-top">{totalSlots[i * 7 + 4]}</td>
          <td className="day-box-top">{totalSlots[i * 7 + 5]}</td>
          <td className="day-box-top">{totalSlots[i * 7 + 6]}</td>
        </tr>
      )
    }

    return (
    <div className="calendar">
      <h1>{this.month()}</h1>
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
    </div>
    )
  }
}

export default Calendar;

