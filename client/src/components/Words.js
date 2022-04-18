import React from 'react';
import { Typography, Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { fetchDictionary } from '../actions/Dictionary.js';
import { useDispatch } from 'react-redux';

const Words = ({ article, articleID }) => {
  const dispatch = useDispatch();
  const words = article.split(' ');

  return (
    <>
      <Grid container>
        {words.map((word) => {
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
            <Grid item key={uuidv4()}>
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
                    color: 'red',
                    transform: 'rotate(100deg)',
                  },
                }}
                onClick={() => {
                  dispatch(fetchDictionary(resultAfterFiltering.actualWord));
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
