var React = require("react");
var ReactDom = require("react-dom");

class Zipcode extends React.Component{
   constructor(props){
       super(props);
       this.state={
           zipcode:""
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }
   
   handleChange(e){
     var city = e.target.value;
     this.setState(function(){
       return{ zipcode:city}
    })
   }

   handleSubmit(){
    this.props.onSubmitCity(this.state.zipcode)

    this.setState(function(){
        return{ zipcode:""}
     })
   }

   
    render(){
        return(
        <div className='zipcode-container'
        style={{flexDirection: this.props.direction}}>
        <input className='form-control'
          placeholder='St. George, Utah'
          type='text'
          value={this.state.zipcode}
          onChange={this.handleChange}
         />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmit}>
            Get Weather
        </button>
      </div>   
        )
    }
}

module.exports = Zipcode;