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
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 function AlertDialogSlide(props) {
  
    
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary"  startIcon={<DeleteIcon />} onClick={handleClickOpen}>
       Delete
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Your will not be able to recover this imaginary file!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button onClick={(e)=>{handleClose(e);
         props.delete(e,props.index);}} variant="contained" color="secondary">
            Yes,delete it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



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
      isEdite : false,
      show: false
    }
  


  
  
  
deleteitem=(e)=>{
  this.props.delete(e,this.props.index);

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
              <StyledTableCell align="right"><AlertDialogSlide delete={(e)=>this.props.delete(e,this.props.index)} index={this.props.details.id}/></StyledTableCell>
             
   
              </TableRow>
             </TableBody>
            
             
               
         </Fragment>
             
     )
   }
//handelupdate
handelmodefy=(e)=>{
  e.preventDefault();
  

  
  
}
 
   //render Ediit User
   renderEdit=()=>{
     return(
         
       
        
        <Paper>
       
        <form onSubmit={(e)=>{this.props.update(e,this.props.details.id,this.props.details.firstName,this.props.details.lastName,this.props.details.email,this.props.details.Password);
        
        }}>
        <TextField ref={(v) =>{this.input=v}} defaultValue={this.props.details.firstName}onChange={this.props.handelFname} type="text"/>
        <TextField ref={(v) =>{this.input=v}} defaultValue={this.props.details.lastName} type="text" onChange={this.props.handelLname}/>
        <TextField ref={(v) =>{this.input=v}} defaultValue={this.props.details.email} type="text" onChange={this.props.handelemail}/>
        <TextField ref={(v) =>{this.input=v}} defaultValue={this.props.details.Password} type="text" onChange={this.props.handelpass}/>
        <TextField ref={(v) =>{this.input=v}} defaultValue={this.props.details.created_at} type="text" onChange={this.props.handeltime}/>
        <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
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