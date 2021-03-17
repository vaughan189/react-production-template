import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { hideSnackbarAction } from '../../state/SnackBar/Action';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export function MaterialSnackbar(_props) {
  const classes = useStyles();
  const { isOpen, message, type } = useSelector((state) => state.Snackbar);

  const dispatch = useDispatch();

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(hideSnackbarAction());
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        key={`bottom,center`}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={type} className="medium_font">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
