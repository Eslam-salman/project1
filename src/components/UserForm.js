import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const UserForm = (props) =>{
     return (
    <form onSubmit={(e)=>props.create(e)}>
      <div>
      
      
        <TextField style={{marginLeft:'2rem',marginTop:'2rem',marginBottom:'2rem'}} required id="standard-required1" label="First Name"onChange={props.handelFname} placeholder="First Name" /></div>
        <div>
        <TextField style={{marginLeft:'2rem',marginBottom:'2rem'}} required id="standard-required" label="Last Name"onChange={props.handelLname} placeholder="Last Name" /></div>
        <div>
        <TextField style={{marginLeft:'2rem',marginBottom:'2rem'}} required id="standard-required" label="Email"onChange={props.handelemail} placeholder="Email" /></div>
        <div>
        <TextField style={{marginLeft:'2rem',marginBottom:'2rem'}}  required id="standard-required" label="Password"onChange={props.handelpass} placeholder="Password" />
        </div>

        <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{marginLeft:'2rem',marginBottom:'2rem'}}
        startIcon={<AddCircleIcon/>}
      >
        Save
      </Button>

    </form>
        
     )

 }
 export default UserForm;