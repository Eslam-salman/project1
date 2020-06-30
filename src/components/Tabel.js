import React,{Component, Fragment} from 'react';
import UserList from './UserList';
import UsereForm from './UserForm';


class Tabel extends Component {
  state={
    firstname:" ",lastname:" ",email:" ",Password:"",created_at:" "
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


  update(e,index) {
    // update entity - PUT
    e.preventDefault();
   
    // this will update entries with PUT
    fetch("http://167.86.81.129:8080/Aqar/update_user", {
        "method": "PUT",
        
        "body": JSON.stringify({
          id:index,
          firstName:this.state.firstname,
          lastName:this.state.lastname,
          password:this.state.Password,
          email:this.state.email,
          created_at:this.state.created_at,
        

        })
        })
        .then(response => response.json())
        .then(response => { console.log(response);
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
