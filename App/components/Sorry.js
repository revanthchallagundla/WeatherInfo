var React = require("react");
var Reactdom = require("react-dom"); 

class Sorry extends React.Component{
    render(){
        return(
           <div>
     
              {this.props.error}
          </div>
            
        )
    }
}

module.exports = Sorry;