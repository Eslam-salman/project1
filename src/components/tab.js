import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HomeIcon from '@material-ui/icons/Home';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import UserList from './UserList';
import Tabel from './Tabel'
import Form from './Form'
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);



function TabPanel(props) {

   

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function 
SimpleTabs() {



  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs   value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example">
          <Tab label="Show users"icon={< HomeIcon/>} {...a11yProps(0)} />
          <Tab label="Add users"icon={<AddCircleIcon/>} {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <TableContainer component={Paper}>
     <Table aria-label="customized table">
     <TableHead>
     <TableRow>
     <StyledTableCell>#</StyledTableCell>
     <StyledTableCell align="right">First Name</StyledTableCell>
     <StyledTableCell align="right">Last Name</StyledTableCell>
     <StyledTableCell align="right">Email</StyledTableCell>
     <StyledTableCell align="right">Password</StyledTableCell>
     <StyledTableCell align="right">Created_at</StyledTableCell>
     <StyledTableCell align="right">Edit</StyledTableCell>
     <StyledTableCell align="right">Delete</StyledTableCell>
      
   </TableRow>
   </TableHead>
  <Tabel/>
    
  </Table>
  </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Form/>
      </TabPanel>
     
    </div>
  );
}
