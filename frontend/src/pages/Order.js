import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; // Import Typography component
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 100,
  width: 300,
  lineHeight: '100px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Order() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}> {/* Full width item for the text */}
        <Typography variant="h5" align="center">Incoming Order</Typography>
      </Grid>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((order) => (
                <Item key={order} order={order}>
                  {`order=${order}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
