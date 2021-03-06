import React, { useState } from "react";

function MonthPicker(props){
  const [display, setDisplay] = useState(false)

  var c = function(day) {
    props.onClick(day);
    setDisplay(!display);
  }


  return (
    <table id="months">
      <thead>
        <tr>
          <th colSpan="4" className="month" onClick={() => setDisplay(!display)} >Select A Month</th>
        </tr>
      </thead>
      { display &&
        <tbody>
          <tr>
            <td onClick={() => c('January')}>January</td>
            <td onClick={() => c('February')}>February</td>
            <td onClick={() => c('March')}>March</td>
            <td onClick={() => c('April')}>April</td>
          </tr>
          <tr>
            <td onClick={() => c('May')}>May</td>
            <td onClick={() => c('June')}>June</td>
            <td onClick={() => c('July')}>July</td>
            <td onClick={() => c('August')}>August</td>
          </tr>
          <tr>
            <td onClick={() => c('September')}>September</td>
            <td onClick={() => c('October')}>October</td>
            <td onClick={() => c('November')}>November</td>
            <td onClick={() => c('December')}>December</td>
          </tr>
        </tbody>
      }
    </table>
  )
}

export default MonthPicker;