import { Snackbar, Alert } from '@mui/material';

function FeedbackSnackbar({ open, message, onClose, severity = 'success' }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2500}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
}

export default FeedbackSnackbar;
