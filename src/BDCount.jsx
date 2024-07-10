import { useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function BDCount() {

  function calcCount() {
      var count = 0;
      for(var i=0; i<persons.length; i++){
        var [DD, MM, YYYY] = persons.at(i).bd.split('.');
        var dateNow = new Date();
        var personDate = new Date(dateNow.getFullYear(), parseInt(MM)-1, parseInt(DD));
        var diffTime = personDate - dateNow;
        if(diffTime < 0) continue;
        var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
        if(diffDays < 30)  count = count + 1;
      }
      return count;
  }

  return (
    <div className="base" sx={{backgroundColor:"grey"}}>
      <Card sx={{ width: 240}}>
        <CardContent>
        <Typography variant={'h6'} color="text.secondary" gutterBottom>
           Дни рождения следующие 30 дней
        </Typography>
        <Typography variant={'h3'} color="text.secondary" gutterBottom>
           {calcCount()}
        </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default BDCount
