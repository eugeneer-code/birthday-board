import { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Paper, Popper } from '@mui/material';

function generateValues(year)
{
    var list = [];
    for(var i=0; i<persons.length; i++){
        var [DD, MM, YYYY] = persons.at(i).bd.split('.');
        var dateStr = year+'-'+MM+'-'+DD;
        var index = list.findIndex(x => x.date ===dateStr);
        if(index == -1){
          list.push({ date: dateStr, count: 0, tooltip: ""});
          index = list.length - 1;
        }
        var descr = DD + "." + MM + " " + persons.at(i).name;
        if((year - YYYY) % 10 == 0) descr = descr + "✭" + (year - YYYY) + "✭"
        else if((year - YYYY) % 5 == 0) descr = descr + "☆" + (year - YYYY) + "☆"

        list.at(index).count = list.at(index).count + 1;
        if(list.at(index).count > 1) list.at(index).tooltip = list.at(index).tooltip + '\n'; 
        list.at(index).tooltip = list.at(index).tooltip + descr;
    }
    return list
}

function Calendar(props) {
    const [cacheYear, setCacheYear] = useState(0);
    const [itemValues, setItemValues] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [tooltipText, setTooltipText] = useState("");
    const open = Boolean(anchorEl);

    useEffect(() => {
    if (props.year !== cacheYear) {
        setCacheYear(props.year);
        setItemValues(generateValues(props.year));
    }
    }, [props.year]);

    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
      <Card  sx={{ width: 800}}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Карта дней рождений в {props.year} году
        </Typography>
          <CalendarHeatmap
            startDate={new Date(props.year-1, 11, 31)}
            endDate={new Date(props.year, 11, 31)}
            values={itemValues}
            onMouseOver={(event, value) => {
              if(value) {
                setTooltipText(value.tooltip);
                handleClick(event);
              }
              }}
            onMouseLeave={(event, value) => {handleClose();}}
            classForValue={(value) => {
                if (!value) {
                  return 'color-empty';
                }
                return `color-scale-${value.count}`;
              }}
          />
        </CardContent>
        <Popper
         open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          placement="top"
        >
          <Paper>
              <Typography style={{whiteSpace: 'pre-line'}} sx={{ p: 2 }}>{tooltipText}</Typography>
            </Paper>
        </Popper>
      </Card>
  )
}

export default Calendar
