var React = require("react");
var Reactdom = require("react-dom");
var Main = require("./Main");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Forecast = require("./Forecast");
var Switch = require("react-router-dom").Switch;
var Sorry = require("./Sorry");
var Details = require("./Details");
var Zipcode =require("./Zipcode");

class App extends React.Component{
    render(){
        return(
            <Router>
             <div className='container'>
          <Route render={function (props) {
            return (
              <div className='navbar'>
                <h1>Weather Info</h1>
               <Zipcode direction="row"
               onSubmitCity={function(city){
                props.history.push({
                    pathname:"/forecast",
                    search:'?city='+city    
                })
               }}
               zipcode={123}/>
              </div>
            )
          }} />
                <Switch>
            <Route exact path="/" render={function(props){
                return( <div className='home-container' style={{backgroundImage: "url('App/images/pattern.svg')"}}>
                        <h1 className='header'>Enter a City</h1>
                        <Zipcode direction="row"
               onSubmitCity={function(city){
                props.history.push({
                    pathname:"/forecast",
                    search:'?city='+city    
                })
               }}
               zipcode={123}/>
                </div>)
            }}/>
            <Route exact path="/forecast" component={Forecast}/>
            <Route exact path="/sorry" component={Sorry}/>
            <Route  path="/details" component={Details}/>
          
            <Route render ={function(){
                    return <p style={{'textAlign':'center'}}> Not valid Url </p>
            }}/>
             </Switch>
             </div>
            
            </Router>
            
        )
    }
}

module.exports = App;