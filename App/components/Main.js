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
        <div className='zipcode-container'
          style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          onChange={this.handleChange}
          placeholder='St. George, Utah'
          type='text'
          value={this.state.zipcode} />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitZipcode}>
            Get Weather
        </button>
      </div>
    )    
    }
    
    }

    module.exports=Main;