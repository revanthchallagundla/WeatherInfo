var React = require("react");
var ReactDom = require("react-dom");
var queryString = require("query-string");


class Foreast extends React.Component{
   
    render(){
        var city = queryString.parse(this.props.location.search);
        console.log(city)
      return(
          <div>
             {city.city}
          </div>
      )
  }

}

module.exports = Foreast;