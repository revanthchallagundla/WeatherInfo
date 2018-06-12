var React = require("react");
var ReactDom = require("react-dom");
var Link = require("react-router-dom").Link;


class Weathergrid extends React.Component{
    render(){
    return(
    <div>
        <div className="dayContainer">
        <Link to={{pathname:"/details/" + this.props.city}} >
        <img className="weather" src="/app/images/10d.svg" alt="Weather"/>
        </Link>
        </div>  
        <h2 className="subheader">{this.props.date}</h2>
        </div>
         );
    }
}

module.exports=Weathergrid;