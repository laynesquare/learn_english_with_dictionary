import { Grid, Typography, TextField, Button, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './index.css';
import { styled } from '@mui/material/styles';
import Display from './components/Display';
import EmptyTextFieldPrompt from './components/EmptyTextFieldPrompt';
import { useState } from 'react';
import { fetchArticles } from './actions/articles.js';
import { fetchDictionary } from './actions/dictionary.js';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer';
import DictionaryPanel from './components/DictionaryPanel';
import ResposiveDictionary from './components/ResposiveDictionary';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
  },
});

const App = () => {
  const dispatch = useDispatch();
  ////////////////////////////////////////////////
  const [dicModalOpen, setDicModalOpen] = useState(false);
  const handleDicModalOpen = () => setDicModalOpen(true);
  const handleDicModalClose = () => setDicModalOpen(false);
  ////////////////////////////////////////////////
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);
  ////////////////////////////////////////////////

  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword === '') {
      handleDialogOpen();
    } else {
      dispatch(fetchArticles(keyword));
      dispatch(fetchDictionary(keyword));
    }
  };

  return (
    <>
      {/* Everything is inside this container */}
      <Container maxWidth="xl" sx={{ p: '1rem 1rem' }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ pt: '1rem', fontFamily: 'Grenze Gotisch' }}
          gutterBottom
        >
          Learn English with Dictionary
        </Typography>
        <Typography
          variant="h6"
          display="block"
          align="center"
          sx={{
            width: '80',
            ml: 'auto',
            mr: 'auto',
            mb: '2rem',
            fontFamily: 'Grenze Gotisch',
          }}
          gutterBottom
        >
          facilitate English learning through a dictionary
        </Typography>

        <form
          autoComplete="off"
          noValidate
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Grid
            container
            justifyContent="center"
            spacing={2}
            alignItems="center"
          >
            <Grid item>
              <CssTextField
                required
                size="medium"
                label="Search for a keyword"
                placeholder="e.g. government"
                autoComplete="off"
                onChange={(e) => {
                  setKeyword(`${e.target.value}`);
                }}
                InputProps={{
                  inputProps: {
                    style: { textAlign: 'center' },
                  },
                }}
                color="secondary"
              ></CssTextField>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{
                  borderRadius: '10rem',
                }}
              >
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid container spacing={3} sx={{ mt: '0.5rem' }}>
          <Grid item sm={12} md={12} lg={8}>
            <Display handleDicModalOpen={handleDicModalOpen} />
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            lg={4}
            sx={{
              mt: '4rem',
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
              alignSelf: 'start',
              position: 'sticky',
              top: '0',
            }}
          >
            <DictionaryPanel />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}

      <EmptyTextFieldPrompt
        handleDialogClose={handleDialogClose}
        dialogOpen={dialogOpen}
      />

      <ResposiveDictionary
        dicModalOpen={dicModalOpen}
        handleDicModalClose={handleDicModalClose}
      />
    </>
  );
};

export default App;
