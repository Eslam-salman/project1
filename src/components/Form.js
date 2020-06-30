import React,{Component, Fragment} from 'react';
import UsereForm from './UserForm';
import Paper from '@material-ui/core/Paper';


class Form extends Component {
  state={
    data:[{firstname:"Alaa",lastname:"salman",email:"eslam@hotmail.com",Password:"123",created_at:"9:20"},{firstname:"sameh",lastname:"salman",email:"eslam@hotmail.com",Password:"123",created_at:"9:20"}]
   , currant:{firstname:"",lastname:"",email:"",Password:"",created_at:""}
  

  }
  handelChang =(e) =>{
   

    this.setState(
      {
        currant:" "
      }
    )
  }
  handelAdd =(e) =>{
    e.preventDefault();
  let newCurrent=this.state.currant;
  let newdata=this.state.data;
  newdata.push({newCurrent});
  this.setState({
    data:newdata,
   
  })
  console.log(this.state.currant);
  
  }
  
  
  
  


  
  render(){
 
    return (
    <section className="App">
      <h2>Add Users</h2>
      <Paper>
      <UsereForm handelChang={this.handelChang} handelAdd={this.handelAdd} currant={this.state.currant} />
      </Paper>

        <ul ></ul> 
     
     
    </section>
  
    
    
      );
  }
 
}

export default Form;
