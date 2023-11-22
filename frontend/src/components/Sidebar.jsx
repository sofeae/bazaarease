import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Sidebar() {
  
  const sidebarStyle = {
    //position: 'fixed', // Set the position to fixed
    position: 'flex',
    width: '230px', // Adjust the width as needed
    backgroundColor: 'white', // Set the background color to white
    height: '100%', // Cover the full height of the viewport
    left: '20',
    //right: '200'
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '8px', // Adjust the spacing between the icon and text
  };

  return (
    <List sx={sidebarStyle}>
      <ListItem component={Link} to="/" style={listItemStyle}>
        <RestaurantIcon style={iconStyle} />
        <ListItemText primary="Menu" />
      </ListItem>
      
      <ListItem component={Link} to="/Order" style={listItemStyle}>
        <BorderColorIcon style={iconStyle} />
        <ListItemText primary="Order" />
      </ListItem>
      
      <ListItem component={Link} to="/QR" style={listItemStyle}>
        <QrCodeIcon style={iconStyle} />
        <ListItemText primary="QR" />
      </ListItem>
      
      <ListItem component={Link} to="/Customer" style={listItemStyle}>
        <AttachMoneyIcon style={iconStyle} />
        <ListItemText primary="Sales" />
      </ListItem>
      
      {/* Add more items as needed */}
    </List>
  );
}

export default Sidebar;