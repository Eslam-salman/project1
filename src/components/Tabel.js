import React,{Component, Fragment} from 'react';
import UserList from './UserList';
import UsereForm from './UserForm';


class Tabel extends Component {

  constructor(props) {
    super(props);

    this.state={
      firstname:null,lastname:null,email:null,password:null,created_at:null
     ,user:[]
    }

    this.handelFname = this.handelFname.bind(this);
    this.handelLname = this.handelLname.bind(this);
    this.handelemail = this.handelemail.bind(this);
    this.handelpass = this.handelpass.bind(this);
    this.handeltime = this.handeltime.bind(this);
    this.update = this.update.bind(this);
    
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

  delete(e,index) {
    e.preventDefault();
    // delete entity - DELETE
   
    console.log(index);
   
    // deletes entities
    fetch(`http://167.86.81.129:8080/Aqar/delete_user?id=${index}`, {
      "method": "DELETE",
      "headers": {
        "x-rapidapi-host": "167.86.81.129:8080",
        
      }
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
       password: Ncurrent
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


  update(e,index,Fname,Lname,emaill,pass) {
    // update entity - PUT
    e.preventDefault();
   if (this.state.firstname===null){
    this.setState(
      {
        firstname:Fname
        
      })
   }
   if (this.state.lastname===null){
    this.setState(
      {
        lastname:Lname
        
      })
   }
   if (this.state.Password===null){
    this.setState(
      {
        password:pass
        
      })
   }
   if (this.state.email===null){
    this.setState(
      {
        email:emaill
        
      })
   }
   
   
console.log(this.state.email)
    // this will update entries with PUT
    fetch("http://167.86.81.129:8080/Aqar/update_user", {
        "method": "POST",
        "mode": "cors", // no-cors, *cors, same-origin
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          id:index,
          firstName:this.state.firstname,
          lastName:this.state.lastname,
          password:"123456",
          email:this.state.email                
        })
        })
        .then(response => response.json())
        .then(response => {console.log(response);
          this.setState(
            {
              firstname:null,
              lastname:null,
              email:null,
              password:null
              
            })

          window.location.reload(false);
        })
        .catch(err => { console.log(err); });
       

      
       
  }


  create(e) {
    // add entity - POST
    e.preventDefault();
    // creates entity
    fetch("http://167.86.81.129:8080/Aqar/add_user", {
      "method": "POST",
      
      "body": JSON.stringify({
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        password: this.state.password,
        email: this.state.email,
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
    const{user}=this.state;
    const UserListm= user.map((user,index)=>{
      return(
        <UserList details={user} key={index}update={this.update}index={user.id} delete={this.delete} handelFname={this.handelFname} handelLname={this.handelLname}
        handelemail={this.handelemail} handeltime={this.handeltime}/>
        
      )
    })
    return (/*
    <section className="App">
      <h2>Add Courses</h2>
      <div>
      <UsereForm handelChang={this.handelChang} handelAdd={this.handelAdd} currant={this.state.currant} />
      </div>

        <ul ></ul> 
     
     
    </section>*/
    <Fragment>
      {UserListm}
    </Fragment>
    
      );
  }
 
}

export default Tabel;
