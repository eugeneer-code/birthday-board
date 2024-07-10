import { useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function AnniversaryCount() {

  return (
    <div className="base" sx={{backgroundColor:"grey"}}>
      <Card sx={{ width: 240}}>
        <CardContent>
        <Typography variant={'h6'} color="text.secondary" gutterBottom>
           Юбилеи следующие 30 дней
        </Typography>
        <Typography variant={'h3'} color="text.secondary" gutterBottom>
           {persons.length}
        </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default AnniversaryCount
