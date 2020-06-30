import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
        <TextField required id="standard-required" label="Required"onChange={props.handelFname} defaultValue="First Name" />
        <TextField required id="standard-required" label="Required"onChange={props.handelLname} defaultValue="Last Name" />
        <TextField required id="standard-required" label="Required"onChange={props.handelemail} defaultValue="Email" />
        <TextField required id="standard-required" label="Required"onChange={props.handelpass} defaultValue="Password" />
        <TextField required id="standard-required" label="Required"onChange={props.handeltime} defaultValue="Time" />

        <Button
        type="submit"
        variant="contained"
        color="primary"
        
        startIcon={<AddCircleIcon/>}
      >
        Save
      </Button>

    </form>
        
     )

 }
 export default UserForm;