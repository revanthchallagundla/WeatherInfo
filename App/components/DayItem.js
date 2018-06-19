var React = require("react");
var ReactDom = require("react-dom");
var Link = require("react-router-dom").Link;
var Details = require("./Details");

function DayItem (props) {  
    var date = props.date;
    var icon = props.day.weather[0].icon;
    return(
        <div>
        <div className="dayContainer" onClick={props.onClick}>
        <img className="weather" src={'/app/images/' + icon + '.svg'} alt="Weather" />  
        </div>  
        <h2 className="subheader">{date}</h2>       
        </div>
        )
    }

  
module.exports= DayItem;