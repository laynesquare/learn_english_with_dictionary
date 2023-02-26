import {
  DialogContentText,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';

const HeadsUp = () => {
  const [HeadsUp, setHeadsUp] = useState(true);

  useEffect(() => {
    serverAwaker();
  }, []);

  return (
    <Dialog
      open={HeadsUp}
      aria-labelledby="heads-up"
      aria-describedby="slow-loading-will-occur-due-to-free-hosting-service"
      sx={{ minWidth: '360px' }}
    >
      <DialogTitle id="heads-up" fontWeight="bold">
        Welcome! Just a heads-up before you go ...
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="slow-loading-will-occur-due-to-free-hosting-service"
          variant="body2"
        >
          <b>Slow loading</b> will occur because the back-end server is deployed
          on a free hosting service.
          <br />
          <br />
          Server inactivity for 15 mins will cause it to be auto-spun down. It
          usually takes about <b>30 secs</b> to refresh back on, which is why
          the first search might feel like taking forever.
          <br />
          <br />
          If you make <b>frequent API requests for articles</b>, New York Times
          API server will block the access and have it back up after about
          <b> 30 secs</b>.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => setHeadsUp(false)}
          size="small"
        >
          Got it
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const serverAwaker = () => fetch(process.env.REACT_APP_LEARN_ENGLISH_API);

export default HeadsUp;
