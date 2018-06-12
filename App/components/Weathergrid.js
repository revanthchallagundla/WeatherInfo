var React = require("react");
var ReactDom = require("react-dom");
var Link = require("react-router-dom").Link;
var Details = require("./Details");

class Weathergrid extends React.Component{
   constructor(props){
    super(props);
    this.state={
        data1:"",
        date2:"",
        date3:"",
        date4:"",
        date5:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
   }


   handleSubmit(date){
    var value = event.target.value;

    this.setState(function(){
      return{      
            data1:this.props.date1,
            date2:this.props.date2,
            date3:this.props.date3,
            date4:this.props.date4,
            date5:this.props.date5
      }
     
    })

   }
   
    render(){
        
        return(
        <div>
        <div className="dayContainer">
        <img className="weather" src="/app/images/10d.svg" alt="Weather" onClick={this.handleSubmit}/>
        </div>  
        <h2 className="subheader">{this.props.date}</h2> 
         {this.state.data1 &&
             <Link 
             to={{
                pathname:'/details' + this.props.city
             }}>
             </Link>  
             }
             <Details data1={this.state.data1}/>
        </div>

         );
    }
}

module.exports=Weathergrid;