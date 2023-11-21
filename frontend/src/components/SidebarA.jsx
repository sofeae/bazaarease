import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
//import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
//import ProfilePicture from './ProfilePicture';
//import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function PermanentDrawerLeft() {
  const items = [
    //{ text: 'Profile', icon: <PermIdentityOutlinedIcon /> },
    { text: 'Menu', icon: <RestaurantIcon /> },
    { text: 'Order', icon: <BorderColorIcon /> },
    { text: 'QR Code', icon: <QrCodeIcon /> },
    { text: 'Sales Management', icon: <AttachMoneyIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex'}}>
      <Drawer
        className="custom-drawer" 
        variant="permanent"
        anchor="left"
      >

        <Box sx={{ flexGrow: 1, marginTop: 15}}>
          <List>
            {items.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton className="list-item">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <List>
          <ListItem disablePadding>
            <ListItemButton className="list-item">
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      
    </Box>
  );
}
