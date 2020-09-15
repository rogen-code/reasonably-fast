import React, { useState }  from 'react';

class UpcomingRaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({selected: event.target.value});
  }

  render() {
    return (
      <div className="upcomingRaces">
       <h1>Upcoming Races</h1>
       <div>{this.props.upcomingRace}</div>
       <form className="upcomingRace-form">
        <label>
          Race Day
        </label>
        <select onChange={this.handleChange}>
          <option value={'12/5/2020'} >December 5, 2020</option>
          <option value={'12/6/2020'} >December 6, 2020</option>
          <option value={'12/12/2020'} >December 12, 2020</option>
          <option value={'12/13/2020'} >December 13, 2020</option>
          <option value={'12/19/2020'} >December 19, 2020</option>
          <option value={'12/20/2020'} >December 20, 2020</option>
          <option value={'12/26/2020'} >December 26, 2020</option>
          <option value={'12/27/2020'} >December 27, 2020</option>
        </select>
        <button type="submit" onClick={() => this.props.x(this.state.selected)}>Submit Upcoming Race</button>
       </form>
      </div>
    )
  }
}

export default UpcomingRaces;