import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts({isFormSubmitted,setIsFormSubmitted}) {

  return (
    <Box sx={{ width: '50%' }}>
      <Collapse in={isFormSubmitted}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setIsFormSubmitted(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Details shared successfully!
        </Alert>
      </Collapse>
    </Box>
  );
}
