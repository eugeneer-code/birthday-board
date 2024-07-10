import { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, CardHeader } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function generateValues(year, month)
{
    var prefix = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    var list = [];
    for(var i=0; i<persons.length; i++){
        var [DD, MM, YYYY] = persons.at(i).bd.split('.');
        if(parseInt(MM) == month){
            var dateStr = parseInt(DD) + " " + prefix.at(parseInt(MM)-1);
            if((year - YYYY) % 10 == 0) dateStr = dateStr + "\u00A0\u00A0\u00A0⭐" + (year - YYYY) + "⭐"
            else if((year - YYYY) % 5 == 0) dateStr = dateStr + "\u00A0\u00A0\u00A0★" + (year - YYYY) + "★"
            list.push({name: persons.at(i).name, date: dateStr, day: parseInt(DD)})
        }
    }
    list.sort((a, b) => a.day - b.day);
    if(list.length == 0) list.push({name:"", date:""})
    return list
}


function MonthView(props) {

    var monthList = ["Январь", "Февраль", "Март", "Апрель",
                    "Май", "Июнь", "Июль", "Август",
                    "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    const [cacheMonth, setCacheMonth] = useState(-1);
    const [itemValues, setItemValues] = useState([]);
    useEffect(() => {
        if (props.month !== cacheMonth) {
            setCacheMonth(props.month);
            setItemValues(generateValues(props.year, props.month));
        }
        }, [props.month]);

    return (
      <Card sx={{ width: 535}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <IconButton onClick={props.prevMonth}><ArrowBackIosIcon /></IconButton>
            <Typography variant={'h6'} color="text.secondary" gutterBottom>{monthList[props.month-1]} {props.year}</Typography>
            <IconButton onClick={props.nextMonth}><ArrowForwardIosIcon /></IconButton>
        </div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableBody>
              {itemValues.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>))}
              
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
  )
}

export default MonthView
