var React = require("react");
var ReactDom = require("react-dom");
var Link = require("react-router-dom").Link;


function Details(props){
    console.log(props.data1)
        return(
          
            <div>
                {props.data1}
                </div>
        )
    
}


module.exports = Details;