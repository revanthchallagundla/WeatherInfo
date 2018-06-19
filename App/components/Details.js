var React = require("react");
var ReactDom = require("react-dom");
var Link = require("react-router-dom").Link;
var DayItem = require("./DayItem");
var convertTemp  = require("../Utils/helper").convertTemp;
var queryString = require("query-string");


function Details(props){
    var props = props.location.state; 
    console.log(props)
        return(
            <div>
            <div className='description-container'>
              <p>{props.city}</p>
              <p>{props.weather[0].description}</p>
              <p>min temp: {convertTemp(props.temp.min)} degrees</p>
              <p>max temp: {convertTemp(props.temp.max)} degrees</p>
              <p>humidity: {props.humidity}</p>
            </div>
          </div> 
        )
    
}


module.exports = Details;