import React  from 'react';
import Calendar from './components/Calendar.jsx';
import RacePicker from './RacePicker.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

   render(){
      return(
         <div>
            <Calendar />
            <RacePicker />
         </div>
      );
   }
}
export default App;