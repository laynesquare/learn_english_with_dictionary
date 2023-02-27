import { useSelector, useDispatch } from 'react-redux';
import { SLOW_LOADING_END } from '../../constants/actionTypes';
import { forwardRef } from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const SlowLoadingPrompt = () => {
  const slowLoading = useSelector((state) => state.slowLoading);
  const dispatch = useDispatch();

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return;
    dispatch({ type: SLOW_LOADING_END });
  };

  return (
    <Snackbar
      open={slowLoading}
      onClose={handleClose}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity="warning" sx={style.bar}>
        I know it's been 3 secs, but it's a free server-hosting service. Sorry
        for the waiting. It's not a bug, and the results will come in I promise.
      </Alert>
    </Snackbar>
  );
};

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  bar: {
    fontWeight: 'bold',
    bgcolor: '#FFAE38',
    color: 'black',
  },
};

export default SlowLoadingPrompt;
