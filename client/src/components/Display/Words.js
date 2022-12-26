import { Typography, Grid, useMediaQuery } from '@mui/material';
import { fetchDictionary } from '../../actions/dictionary.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { theme } from '../../themes/theme.js';
import ResposiveDictionary from '../DictionaryPanel/ResposiveDictionary';

const Words = ({ wordSrc }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [rwdDictionary, setRwdDictionary] = useState(false);
  const words = wordSrc.split(' ');

  const handleClickWord = (word) => {
    dispatch(fetchDictionary(word));
    if (isMobile) setRwdDictionary(true);
  };

  return (
    <>
      <Grid container p={1}>
        {words.map((word, index) => {
          const [initialPunc, clickableWord, lastSecondPunc, lastPunc] =
            puncSeparator(word, /[^\w\s]/g);

          return (
            <Grid item key={index}>
              <Typography variant="h7">{initialPunc}</Typography>
              <Typography
                variant="h7"
                sx={{ '&:hover': { color: theme.palette.secondary.main } }}
                onClick={() => handleClickWord(clickableWord)}
              >
                {clickableWord}
              </Typography>
              <Typography variant="h7">
                {lastSecondPunc}
                {lastPunc}
                &nbsp;
              </Typography>
            </Grid>
          );
        })}
      </Grid>

      {isMobile && (
        <ResposiveDictionary
          rwdDictionary={rwdDictionary}
          setRwdDictionary={setRwdDictionary}
        />
      )}
    </>
  );
};

const puncSeparator = (string, punctuation) => {
  const wordArr = [...string];

  const [initialPunc] = wordArr[0]?.match(punctuation)
    ? [...wordArr.splice(0, 1)]
    : [null];

  const [lastSecondPunc] =
    wordArr[wordArr.length - 2]?.match(punctuation) &&
    wordArr[wordArr.length - 1]?.match(punctuation)
      ? [...wordArr.splice(-2, 1)]
      : [null];

  const [lastPunc] = wordArr[wordArr.length - 1]?.match(punctuation)
    ? [...wordArr.splice(-1, 1)]
    : [null];

  const clickableWord = wordArr.join('');

  return [initialPunc, clickableWord, lastSecondPunc, lastPunc];
};

export default Words;
