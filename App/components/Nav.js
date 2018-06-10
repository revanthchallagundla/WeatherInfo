var React = require("react");
var NavLink = require("react-router-dom").NavLink;

function Nav(){
return(
    <ul className="headers">
       <li>
    <NavLink exact activeClassName="active" to="/">
    Home
    </NavLink>       
    </li> 
    <li>
    <NavLink activeClassName="active" to="/forecast">
    forecast
    </NavLink>       
    </li> 
    </ul>
)

}

module.exports = Nav;