var React = require("react");
var Link = require("react-router-dom").Link;
var Svg = "/app/images/download.svg";

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            city:""
        }
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        var value = event.target.value;
    this.setState(function(){
       return {city:value}
    })
    
    }
    render(){
        var city = this.state.city;
    return(    
       
    <form className="column">
    <label className="header" htmlFor="username" >Enter a City and State </label>
    <input id="city" type="text" value={this.state.city} onChange={this.handleChange} autoComplete="off"/>  
    {city && 
     <Link 
             className="button"
             to={{
                pathname:'/forecast',
                search:'?city=' + city 
             }} >
             Submit
            </Link> }
    </form>
    )    
    }
    
    }

    module.exports=Main;