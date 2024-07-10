import { useState } from 'react'
import Calendar from './Calendar';
import MonthView from './MonthView';
import Count from './Count';
import BDCount from './BDCount';
import AnniversaryCount from './AnniversaryCount';
import Typography from '@mui/material/Typography';

function App() {

  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonth, setCurrMonth] = useState(new Date().getMonth() + 1);

  function onNextMonth() {
    var month = currMonth + 1;
    if(month > 12) {
      month = 1;
      setCurrYear(currYear + 1);
    }
    setCurrMonth(month);
  }
  
  function onPrevMonth() {
    var month = currMonth - 1;
    if(month < 1) {
      month = 12;
      setCurrYear(currYear - 1);
    }
    setCurrMonth(month);
  }

  return (
    <div className="base" style={{textAlign: "center"}}>
      <div className="center" style={{width: "800px", display: "inline-block"}}>
        <div style={{position: "absolute", top: 20}}><Calendar year={currYear} month={currMonth} /></div>
        <div style={{position: "absolute", top: 250, width: "800px"}}>
            <div style={{position: "absolute", left: 0}}>
              <MonthView year={currYear} month={currMonth} nextMonth={onNextMonth} prevMonth={onPrevMonth} />
            </div>
            <div style={{position: "absolute", right: 0, display: "flex", flexDirection: "column", gap:"20px"}}>
              <Count />
              <BDCount />
              <AnniversaryCount />
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
