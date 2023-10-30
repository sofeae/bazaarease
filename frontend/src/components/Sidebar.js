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
    width: '220px', // Adjust the width as needed
    backgroundColor: 'white', // Set the background color to white
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
      <ListItem button component={Link} to="/menu" style={listItemStyle}>
        <RestaurantIcon style={iconStyle} /> {/* Add the icon component here */}
        <ListItemText primary="Menu" />
      </ListItem>
      
      <ListItem button component={Link} to="/order" style={listItemStyle}>
        <BorderColorIcon style={iconStyle} /> {/* Add the icon component here */}
        <ListItemText primary="Order" />
      </ListItem>
      
      <ListItem button component={Link} to="./pages/QR" style={listItemStyle}>
        <QrCodeIcon style={iconStyle} /> {/* Add the icon component here */}
        <ListItemText primary="QR Code" />
      </ListItem>
      
      <ListItem button component={Link} to="/sales" style={listItemStyle}>
        <AttachMoneyIcon style={iconStyle} /> {/* Add the icon component here */}
        <ListItemText primary="Sales" />
      </ListItem>
      
      {/* Add more items as needed */}
    </List>
  );
}

export default Sidebar;
