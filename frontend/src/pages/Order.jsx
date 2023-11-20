import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import BorderColorIcon from '@mui/icons-material/BorderColor';

//components
import Sidebar from '../components/Sidebar';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }


  return (
    <div style={{ display: 'flex' }}>
          <Sidebar className="sidebar" /> {/* Apply the "sidebar" class to the Sidebar */}
      <div>
      <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick}>
        <span style={{ marginLeft: '8px', fontSize: '12px', color: 'gray' }}>
          (Click to complete your order)
        </span>
        <BorderColorIcon />
      </Button> 
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Order Completed!
        </Alert>
      </Snackbar>
      
      {/*<Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>*/}
      <Alert severity="info">This is an information message!</Alert>
      {/*<Alert severity="success">This is a success message!</Alert>*/}
  
      </Stack>
      </div>
    </div>
  );
}