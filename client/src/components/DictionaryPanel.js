import React from 'react';
import {
  Paper,
  Typography,
  Grid,
  Divider,
  Skeleton,
  Box,
  Avatar,
  Grow,
} from '@mui/material';

import { useSelector } from 'react-redux';
import { fetchDictionary } from '../actions/dictionary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { theme } from '../themes/theme';

const DictionaryPanel = () => {
  const keyword = useSelector((state) => {
    return state.keyword;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (keyword.length === 0) {
      dispatch(fetchDictionary('welcome'));
    }
  });

  return (
    <div>
      <Paper variant="outlined">
        <Grid container sx={{ p: '2rem' }}>
          {/* <Grow in> */}
          {/* actual word */}
          <Grid item justifyContent="center" xs={12} sm={12} md={12}>
            <Typography
              variant="h3"
              color="secondary"
              sx={{
                textAlign: 'center',
                letterSpacing: '0.1rem',
                wordWrap: 'break-word',
              }}
            >
              {keyword.length !== 0 ? (
                keyword[0].word
              ) : (
                <Skeleton
                  variant="text"
                  width={'70%'}
                  sx={{
                    borderRadius: '0.5rem',
                    display: 'block',
                    margin: 'auto',
                  }}
                />
              )}
            </Typography>

            {/* phonetics */}
            <Typography
              variant="h4"
              fontFamily={'georgeia'}
              sx={{
                textAlign: 'center',
              }}
            >
              {keyword.length !== 0 ? (
                <>{keyword[0]?.phonetics[0]?.text}</>
              ) : (
                <Skeleton
                  variant="text"
                  height={10}
                  width={'30%'}
                  sx={{
                    borderRadius: '0.5rem',
                    display: 'block',
                    margin: 'auto',
                  }}
                />
              )}
            </Typography>

            <Divider variant="middle" sx={{ mt: '1rem' }} />

            {keyword.length !== 0 ? (
              keyword[keyword.length - 1].defNumArr.map((num, index) => {
                return (
                  <Grid container key={index}>
                    <Grid item xs={12} sm={12} md={12} sx={{ mt: '1rem' }}>
                      <Typography
                        variant="h6"
                        sx={{
                          '&::before': {
                            content: "'-'",
                          },
                        }}
                      >
                        {keyword[0].meanings[num].partOfSpeech}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                      <Typography
                        variant="h7"
                        component={'div'}
                        sx={{
                          ml: '0.5rem',
                          '&::before': {
                            content: "'Def.: '",
                            color: theme.palette.secondary.main,
                          },
                        }}
                      >
                        {keyword[0].meanings[num].definitions[0].definition}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                      {typeof keyword[0].meanings[num].definitions[0]
                        .example !== 'undefined' ? (
                        <Typography
                          variant="h7"
                          component={'div'}
                          sx={{
                            ml: '0.5rem',
                            '&::before': {
                              content: "'E.g. : '",
                              color: theme.palette.secondary.main,
                            },
                          }}
                        >
                          {keyword[0].meanings[num].definitions[0].example}
                        </Typography>
                      ) : (
                        ''
                      )}
                    </Grid>
                  </Grid>
                );
              })
            ) : (
              <Box sx={{ mt: '1rem' }}>
                <Box sx={{ width: '100%', display: 'flex' }}>
                  <Skeleton
                    variant="circular"
                    sx={{ height: '0.5rem', width: '0.5rem', mt: '1rem' }}
                  >
                    <Avatar />
                  </Skeleton>
                  <Skeleton
                    variant="rectangle"
                    height={50}
                    sx={{ mt: '1rem', ml: '1rem', borderRadius: '0.5rem' }}
                    width={'90%'}
                  />
                </Box>
                <Box sx={{ width: '100%', display: 'flex' }}>
                  <Skeleton
                    variant="circular"
                    sx={{ height: '0.5rem', width: '0.5rem', mt: '1rem' }}
                  >
                    <Avatar />
                  </Skeleton>
                  <Skeleton
                    variant="rectangle"
                    height={100}
                    sx={{ mt: '1rem', ml: '1rem', borderRadius: '0.5rem' }}
                    width={'90%'}
                  />
                </Box>
                <Box sx={{ width: '100%', display: 'flex' }}>
                  <Skeleton
                    variant="circular"
                    sx={{ height: '0.5rem', width: '0.5rem', mt: '1rem' }}
                  >
                    <Avatar />
                  </Skeleton>
                  <Skeleton
                    variant="rectangle"
                    height={100}
                    sx={{ mt: '1rem', ml: '1rem', borderRadius: '0.5rem' }}
                    width={'90%'}
                  />
                </Box>
                <Box sx={{ width: '100%', display: 'flex' }}>
                  <Skeleton
                    variant="circular"
                    sx={{ height: '0.5rem', width: '0.5rem', mt: '1rem' }}
                  >
                    <Avatar />
                  </Skeleton>
                  <Skeleton
                    variant="rectangle"
                    height={100}
                    sx={{ mt: '1rem', ml: '1rem', borderRadius: '0.5rem' }}
                    width={'90%'}
                  />
                </Box>
              </Box>
            )}
          </Grid>
          {/* </Grow> */}
        </Grid>
      </Paper>
    </div>
  );
};

export default DictionaryPanel;
