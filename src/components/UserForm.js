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
    <form onSubmit={props.handelAdd}>
        <TextField required id="standard-required" label="Required"onChange={props.handelChang} defaultValue="First Name" />
        <TextField required id="standard-required" label="Required"onChange={props.handelChang} defaultValue="Last Name" />
        <TextField required id="standard-required" label="Required"onChange={props.handelChang} defaultValue="Email" />
        <TextField required id="standard-required" label="Required"onChange={props.handelChang} defaultValue="Password" />
        <TextField required id="standard-required" label="Required"onChange={props.handelChang} defaultValue="Time" />

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