import React,{Component, Fragment} from 'react';
import UsereForm from './UserForm';
import Paper from '@material-ui/core/Paper';


class Form extends Component {
  state={
    firstname:'',lastname:'',email:'',Password:'',created_at:''
   ,user:[]
  }
  componentDidMount() {
    const apiUrl ='http://167.86.81.129:8080/Aqar/get_all_users';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            user: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

 
  
  handelFname =(e) =>{
    let Ncurrent =e.target.value
   this.setState(
     {
       firstname:Ncurrent
       
     }
    
   )
   console.log(this.state.firstname)
 }

 handelLname =(e) =>{
   let Ncurrent =e.target.value
   this.setState(
     {
       lastname: Ncurrent
     }
   )
 }
 handelemail =(e) =>{
   let Ncurrent =e.target.value
   this.setState(
     {
       email: Ncurrent
     }
   )
 }
 handelpass =(e) =>{
   let Ncurrent =e.target.value
   this.setState(
     {
       Password: Ncurrent
     }
   )
 }
 handeltime =(e) =>{
   let Ncurrent =e.target.value
   this.setState(
     {
       created_at: Ncurrent
     }
   )
 }


 

  create(e) {
    // add entity - POST
    e.preventDefault();
    // creates entity
    fetch("http://167.86.81.129:8080/Aqar/add_user", {
      "method": "POST",
      
      "body": JSON.stringify({
        firstName:this.state.firstname,
        lastName:this.state.lastname,
        password:this.state.Password,
        email:this.state.email,
        created_at:this.state.created_at,
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }


  

  


  
  render(){
 
    return (
    <section className="App">
      <h2>Add Users</h2>
      <Paper>
      <UsereForm  create={this. create} handelFname={this.handelFname} handelLname={this.handelLname}
        handelemail={this.handelemail} handeltime={this.handeltime} />
      </Paper>

        <ul ></ul> 
     
     
    </section>
  
    
    
      );
  }
 
}

export default Form;
