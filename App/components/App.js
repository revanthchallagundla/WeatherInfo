var React = require("react");
var Reactdom = require("react-dom");
var Main = require("./Main");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Forecast = require("./Forecast");

class App extends React.Component{
    render(){
        return(
            <Router>
            <div className="container">
            
             <Route exact path="/" component={Main}/>
     
             <Route path="/forecast" component={Forecast}/>
           
             </div>
            </Router>
            
        )
    }
}

module.exports = App;