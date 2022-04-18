import {
  Grid,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import './index.css';
import { styled } from '@mui/material/styles';
import Display from './components/Display';

import { useState } from 'react';
import { fetchArticles } from './actions/articles.js';
import { fetchDictionary } from './actions/dictionary.js';
import { useDispatch } from 'react-redux';

import Footer from './components/Footer';
import DictionaryPanel from './components/DictionaryPanel';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
  },
});

const App = () => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword === '') {
      handleClickOpen();
    } else {
      dispatch(fetchArticles(keyword));
      dispatch(fetchDictionary(keyword));
    }
  };

  return (
    <div>
      <Typography variant="h3" align="center" sx={{ pt: '1rem' }} gutterBottom>
        Learn English with Dictionary
      </Typography>
      <Typography
        variant="h6"
        display="block"
        align="center"
        sx={{ width: '80', ml: 'auto', mr: 'auto', mb: '2rem' }}
        gutterBottom
      >
        Facilitate English learning through a dicitonary.
      </Typography>

      <form
        autoComplete="off"
        noValidate
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Grid container justifyContent="center" spacing={2} alignItems="center">
          <Grid item>
            <CssTextField
              required
              size="string"
              label="Search for a keyword"
              placeholder="e.g. egregious"
              autoComplete="off"
              onChange={(e) => {
                setKeyword(`${e.target.value}`);
              }}
              InputProps={{
                inputProps: {
                  style: { textAlign: 'center' },
                },
              }}
              InputLabelProps={{
                style: { color: '#ff616f' },
              }}
              color="primary"
            ></CssTextField>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained" type="submit">
              GET!
            </Button>
          </Grid>
        </Grid>
      </form>

      <Grid container spacing={2} sx={{ p: '0 2rem' }}>
        <Grid item xs={12} sm={8} md={8}>
          <Display />
        </Grid>
        <Grid item xs={12} sm={4} md={4} sx={{ mt: '72px' }}>
          <DictionaryPanel />
        </Grid>
      </Grid>

      <Footer />

      {/* down below is a dialog triggered when textfield is empty */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          TEXTFIELD CANNOT BE EMPTY
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Enter a keyword for search.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="large">
            Got it.
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
