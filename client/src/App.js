import {
  useMediaQuery,
  Typography,
  TextField,
  Container,
  Button,
  Grid,
} from '@mui/material';
import { fetchDictionary } from './actions/dictionary.js';
import { fetchArticles } from './actions/articles.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { theme } from './themes/theme';
import EmptyTextFieldPrompt from './components/EmptyTextFieldPrompt';
import DictionaryPanel from './components/DictionaryPanel/DictionaryPanel';
import SearchIcon from '@mui/icons-material/Search';
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';
import './index.css';

const App = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [emptyTextFieldPrompt, setEmptyTextFieldPrompt] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword === '') {
      setEmptyTextFieldPrompt(true);
    } else {
      dispatch(fetchArticles(keyword));
      dispatch(fetchDictionary(keyword));
    }
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ ...appStyle.mostOuter }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ ...appStyle.title }}
          gutterBottom
        >
          Learn English with Dictionary
        </Typography>
        <Typography
          variant="h6"
          display="block"
          align="center"
          sx={{ ...appStyle.subTitle }}
          gutterBottom
        >
          Facilitate English learning through a dictionary
        </Typography>

        <form autoComplete="off" noValidate onSubmit={(e) => handleSubmit(e)}>
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
                onChange={(e) => setKeyword(`${e.target.value}`)}
                InputProps={{ inputProps: { style: { textAlign: 'center' } } }}
                color="secondary"
              ></CssTextField>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{ borderRadius: '10rem' }}
              >
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid container spacing={3} sx={{ mt: '0.5rem' }}>
          <Grid item xs={12} lg={8}>
            <Display />
          </Grid>
          <Grid item lg={4} sx={{ ...appStyle.dicPanel }}>
            {!isMobile && <DictionaryPanel />}
          </Grid>
        </Grid>
      </Container>

      <Footer />

      <EmptyTextFieldPrompt
        emptyTextFieldPrompt={emptyTextFieldPrompt}
        setEmptyTextFieldPrompt={setEmptyTextFieldPrompt}
      />
    </>
  );
};

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } },
});

const appStyle = {
  mostOuter: {
    p: '1rem 1rem',
    minWidth: '360px',
    minHeight: '100vh',
  },

  title: { pt: '2rem', fontFamily: 'Moul' },

  subTitle: {
    fontFamily: 'Moul',
    width: '80',
    ml: 'auto',
    mr: 'auto',
    mb: '2rem',
  },

  dicPanel: {
    alignSelf: 'start',
    position: 'sticky',
    mt: '4rem',
    top: '0',
  },
};

export default App;
