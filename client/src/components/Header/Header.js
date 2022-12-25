import { Typography, Button, Grid, TextField } from '@mui/material';
import { fetchDictionary } from '../../actions/dictionary.js';
import { fetchArticles } from '../../actions/articles.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import EmptyTextFieldPrompt from '../EmptyTextFieldPrompt';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const dispatch = useDispatch();
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
      <Typography
        variant="h2"
        align="center"
        sx={{ ...headerStyle.title }}
        gutterBottom
      >
        Learn English with Dictionary
      </Typography>
      <Typography
        variant="h6"
        display="block"
        align="center"
        sx={{ ...headerStyle.subTitle }}
        gutterBottom
      >
        Facilitate English learning through a dictionary
      </Typography>

      <form autoComplete="off" noValidate onSubmit={(e) => handleSubmit(e)}>
        <Grid container justifyContent="center" spacing={2} alignItems="center">
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

const headerStyle = {
  title: { pt: '2rem', fontFamily: 'Moul' },

  subTitle: {
    fontFamily: 'Moul',
    width: '80',
    ml: 'auto',
    mr: 'auto',
    mb: '2rem',
  },
};

export default Header;
