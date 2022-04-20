import React from 'react';
import { Typography, Grid, useMediaQuery } from '@mui/material';

import { fetchDictionary } from '../actions/dictionary.js';
import { useDispatch } from 'react-redux';
import { theme } from '../themes/theme.js';

const Words = ({ article, articleID, handleOpenDicModal }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const words = article.split(' ');

  return (
    <>
      <Grid container p={1}>
        {words.map((word, index) => {
          const regex = /[^\w\s]/g;

          const resultAfterFiltering = {
            initialPunc: null,
            actualWord: '',
            endingPunc: null,
          };

          const initialIsPunc = word.charAt(0).search(regex) === 0;

          const lastSecondIsPunc =
            word.charAt(word.length - 2).search(regex) === 0;

          const lastIsPunc = word.charAt(word.length - 1).search(regex) === 0;

          const condition = [initialIsPunc, lastSecondIsPunc, lastIsPunc];

          const filterWords = () => {
            if (condition[0] && condition[1] && condition[2]) {
              //true true true

              resultAfterFiltering.initialPunc = word.slice(
                0,
                -word.length + 1
              );
              resultAfterFiltering.actualWord = word.slice(1, -2);
              resultAfterFiltering.endingPunc = word.slice(-2);
            }

            if (condition[0] && !condition[1] && condition[2]) {
              //true false true

              resultAfterFiltering.initialPunc = word.slice(
                0,
                -word.length + 1
              );
              resultAfterFiltering.actualWord = word.slice(1, -1);
              resultAfterFiltering.endingPunc = word.slice(-1);
            }

            if (condition[0] && !condition[1] && !condition[2]) {
              //true false false

              resultAfterFiltering.initialPunc = word.slice(
                0,
                -word.length + 1
              );
              resultAfterFiltering.actualWord = word.slice(-word.length + 1);
              // resultAfterFiltering.endingPunc = word.slice(-1);
            }

            if (!condition[0] && !condition[1] && condition[2]) {
              //false false true

              resultAfterFiltering.actualWord = word.slice(0, -1);
              resultAfterFiltering.endingPunc = word.slice(-1);
            }

            if (!condition[0] && condition[1] && condition[2]) {
              //false true ture

              resultAfterFiltering.actualWord = word.slice(0, -2);
              resultAfterFiltering.endingPunc = word.slice(-2);
            }

            if (
              !condition[0] &&
              (!condition[1] || condition[1]) &&
              !condition[2]
            ) {
              //false false false
              resultAfterFiltering.actualWord = word;
            }
          };

          filterWords();

          return (
            <Grid item key={index}>
              <Typography variant="h7">
                {resultAfterFiltering.initialPunc !== null ? (
                  <>&nbsp;{resultAfterFiltering.initialPunc}</>
                ) : (
                  ''
                )}
              </Typography>
              <Typography
                variant="h7"
                sx={{
                  '&:hover': {
                    color: theme.palette.secondary.main,
                  },
                }}
                onClick={() => {
                  dispatch(
                    fetchDictionary(
                      resultAfterFiltering.actualWord,
                      isMobile,
                      handleOpenDicModal
                    )
                  );
                }}
              >
                {resultAfterFiltering.initialPunc !== null ? (
                  resultAfterFiltering.actualWord
                ) : (
                  <>&nbsp;{resultAfterFiltering.actualWord}</>
                )}
              </Typography>
              <Typography variant="h7">
                {resultAfterFiltering.endingPunc !== null
                  ? resultAfterFiltering.endingPunc
                  : ''}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Words;
