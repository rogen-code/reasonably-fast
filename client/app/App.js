import React  from 'react';
import RacePicker from './components/RacePicker.jsx';
import Calendar from './components/Calendar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       upcomingRace: '',
    }
    this.getRace = this.getRace.bind(this);
    this.postRace = this.postRace.bind(this);
  }

  getRace() {
     axios.get('/4638/read')
     .then((data) => {
        console.log(data.data)
        this.setState({
           upcomingRace: data.data[0].raceDate
        })
     })
     .catch((error) => {
        console.log(error)
     })
  }

  postRace(date) {
     axios.post('/4638/create', {
        name: 'Josh Rogen',
        raceDate: date
     })
     .then((res) => {
        console.log(res.data)
     })
  }

  componentDidMount() {
     this.getRace()
  }

   render(){
      return(
         <div className="app">
            <Calendar upcomingRace={this.state.upcomingRace} />
            <RacePicker upcomingRace={this.state.upcomingRace} x={this.postRace}/>
         </div>
      );
   }
}
export default App;