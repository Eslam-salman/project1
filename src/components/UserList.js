import React,{Component,Fragment}from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

class UserList extends Component{
  state ={
    isEdite : false
  }
  

    //togel fun
    toggleState=()=>{
      let {isEdite}=this.state;
       this.setState({
        isEdite:!isEdite
       })
     }
   //render list User
   renderList=()=>{
     return(
         <Fragment>
             <TableBody>
             <TableRow>
             <StyledTableCell component="th" scope="row">
             {this.props.details.id}
              </StyledTableCell>
              <StyledTableCell align="right">{this.props.details.firstName}</StyledTableCell>
              <StyledTableCell align="right">{this.props.details.lastName}</StyledTableCell>
              <StyledTableCell align="right">{this.props.details.email}</StyledTableCell>
              <StyledTableCell align="right">{this.props.details.password}</StyledTableCell>
              <StyledTableCell align="right">{this.props.details.created_at}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" color="primary"onClick={()=>this.toggleState()}>
              Edit User</Button></StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" onClick={()=>this.props.delete(this.props.index)} color="secondary" startIcon={<DeleteIcon />}
      >
        Delete
      </Button></StyledTableCell>
             
   
              </TableRow>
             </TableBody>
            
             
             
               
         </Fragment>
             
     )
   }
//handelupdate
handelmodefy=(e)=>{
  e.preventDefault();
  this.props.handelEdit(this.props.index,this.input.value);
  this.toggleState();
}
 
   //render Ediit User
   renderEdit=()=>{
     return(
         
       
        
        <Paper>
       
        <form onSubmit={(e)=>this.props.update(e)}>
        <TextField ref={(v) =>{this.input=v}} defaultValue={this.props.details.firstName}onChange={this.props.handelFname} type="text"/>
        <TextField ref={(v) =>{this.input=v}} defaultValue={this.props.details.lastName} type="text" onChange={ this.props.handelLname}/>
        <TextField ref={(v) =>{this.input=v}} defaultValue={this.props.details.email} type="text" onChange={ this.props.handelemail}/>
        <TextField ref={(v) =>{this.input=v}} defaultValue={this.props.details.Password} type="text" onChange={this.props.handelpass}/>
        <TextField ref={(v) =>{this.input=v}} defaultValue={this.props.details.created_at} type="text" onChange={ this.props.handeltime}/>
        <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        onSubmit={(e)=>this.props.update(e)}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
     
         
         </form>
         
         </Paper>
        
      
       
        
       
          
  
     
     )
   }
      
          
    render(){
       let {isEdite}=this.state;
        return(
          <Fragment >
          {isEdite?this.renderEdit():this.renderList()}  
             
          </Fragment>  
        )
    }
}
export default UserList;