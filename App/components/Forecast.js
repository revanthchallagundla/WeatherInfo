var React = require("react");
var ReactDom = require("react-dom");
var queryString = require("query-string");
var Api = require("../Utils/Api");
var Link = require("react-router-dom").Link;
var Sorry = require("./Sorry");
var Weathergrid = require("./DayItem");
var Details = require("./Details");
var DayItem = require("./DayItem");

class Foreast extends React.Component{
    constructor(props){
        super(props);
        this.state ={
         forecastData:[],
          loading:true,
          error:"",
          errorMsg:"",
          city:""
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
                       errorMsg:"Sorry City Information Not found",
                       error:true
                     }
                 }) 
              }

            this.setState(function(){
                return {
                    forecastData:resp,
                    loading:false,
                    error:false,
                    city:city.city
                }
            })
        }.bind(this))
        
    }

    handleClick(list) {
         var city =  this.state.city
      console.log("city===" + city)
        this.props.history.push({
          pathname: '/details/' + city,
          state: list,
        })
      }
    

    componentWillUnmount(){
        window.clearImmediate;
    }

    render(){       
       
      return this.state.loading === true
      ? <h1 className='forecast-header'> Loading </h1>
      : <div>
          <h1 className='forecast-header'>{this.city}</h1>
          <div className='forecast-container'>
            {this.state.forecastData.list.map(function (listItem) {
              return <DayItem onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} date={(new Date(listItem.dt*1000)).toDateString()} day={listItem} />
            }, this)}
          </div>
        </div>
      
  }

}

module.exports = Foreast;