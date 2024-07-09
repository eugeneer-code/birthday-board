import { useState } from 'react'
import Calendar from './Calendar';
import MonthView from './MonthView';
import Count from './Count';

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
    <div className="base" sx={{backgroundColor:"grey"}}>
      <Count />
      <Calendar year={currYear} month={currMonth} />
      <MonthView year={currYear} month={currMonth} nextMonth={onNextMonth} prevMonth={onPrevMonth} />
    </div>
  )
}

export default App
