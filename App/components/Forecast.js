var React = require("react");
var ReactDom = require("react-dom");
var queryString = require("query-string");
var Api = require("../Utils/Api");
var Link = require("react-router-dom").Link;
var Sorry = require("./Sorry");

function WeatherGrid(props){
    return( 
            <div className="dayContainer">
            <img className="weather" src="/app/images/10d.svg" alt="Weather"/>
            <h2 className="subheader">{props.date}</h2>
            </div>   
    )

}


class Foreast extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           date1:"",
           date2:"",
           date3:"",
           date4:"",
           date5:"",
           error:""
        }

    }

    componentDidMount(){
        var city = queryString.parse(this.props.location.search);
        console.log(city.city)
        Api.fetchweather(city.city)
            .then(function(resp){
                console.log(resp);
              if(resp === null){
               return this.setState(function(){
                     return{
                       error:"Sorry City Information Not found"
                     }
                 }) 
              }

            this.setState(function(){
                return {
                    date1:resp.list[0],
                    date2:resp.list[1],
                    date3:resp.list[2],
                    date4:resp.list[3],
                    date5:resp.list[4]
                }
            })
        }.bind(this))
        
    }
    

    render(){
        var city = queryString.parse(this.props.location.search);
        var date1 = this.state.date1;
        var date2 = this.state.date2;
        var date3 = this.state.date3;
        var date4 = this.state.date4;
        var date5 = this.state.date5;
        var error = this.state.error;

        //valid time
        var finaldate1 = new Date(date1.dt*1000);
        console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date1.dt));
 
        console.log(finaldate1);
        console.log(city)

        if (error) {
            return (
              <div>
               <Sorry error={error}/>
                <Link to='/'>Reset</Link>
              </div>
            )
          }
      
      return(
          <div>
         <h1 className="forecast-header"> {city.city} </h1>
         <div className="forecast-container">
           <WeatherGrid  date={(new Date(date1.dt*1000)).toDateString()}/>
           <WeatherGrid  date={(new Date(date2.dt*1000)).toDateString()}/>
           <WeatherGrid  date={(new Date(date3.dt*1000)).toDateString()}/>
           <WeatherGrid  date={(new Date(date4.dt*1000)).toDateString()}/>
           <WeatherGrid  date={(new Date(date5.dt*1000)).toDateString()}/>
           </div>
          </div>
      )
  }

}

module.exports = Foreast;