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

class App extends React.Component{
    render(){
        return(
            <Router>
                 <div className="container">
             <Switch>     
            <Route exact path="/" component={Main}/>
            <Route exact path="/forecast" component={Forecast}/>
            <Route exact path="/sorry" component={Sorry}/>
            <Route  path="/details" component={Details}/>
            <Route render ={function(){
                    return <p> Not valid Url </p>
            }}/>
             </Switch>
             </div>
            
            </Router>
            
        )
    }
}

module.exports = App;