import React,{Component, Fragment} from 'react';
import UsereForm from './UserForm';
import Paper from '@material-ui/core/Paper';


class Form extends Component {
  constructor(props) {
    super(props);

    this.state={
      firstname:null,lastname:null,email:null,Password:null,created_at:null
     ,user:[]
    }

    this.handelFname = this.handelFname.bind(this);
    this.handelLname = this.handelLname.bind(this);
    this.handelemail = this.handelemail.bind(this);
    this.handelpass = this.handelpass.bind(this);
    this.handeltime = this.handeltime.bind(this);
    this.create = this.create.bind(this);
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
      "headers": {
    "x-rapidapi-host": "167.86.81.129:8080",
    "content-type": "application/json",
    "accept": "application/json"
  },
      "body": JSON.stringify({
        firstName:this.state.firstname,
        lastName:this.state.lastname,
        password:"123456",
        email:this.state.email
        
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      window.location.reload(false);
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
