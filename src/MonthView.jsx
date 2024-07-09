import { useState } from 'react'
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
import { Button } from '@mui/material';

function MonthView(props) {

    var monthList = ["январе", "феврале", "марте", "апреле",
                    "мае", "июне", "июле", "августе",
                    "сентябре", "октябре", "ноябре", "декабре"];

                    

  return (
      <Card sx={{ width: 500}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Дни рождения в {monthList[props.month-1]} {props.year}
        </Typography>
        <Button onClick={props.prevMonth}>Prev</Button>
        <Button onClick={props.nextMonth}>Next</Button>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableBody>
              <TableRow
                key="1"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Иванов Андрей
                </TableCell>
                <TableCell align="right">{"12 июля"}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
  )
}

export default MonthView
