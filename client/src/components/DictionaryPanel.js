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
      <Paper
        variant="outlined"
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '1rem',

          p: '1rem',
        }}
      >
        <Grid container>
          {/* actual word */}
          <Grid item xs={12} sm={12} md={12} sx={{ wordWrap: 'break-word' }}>
            <Typography variant="h3" color="primary">
              {keyword.length !== 0 ? (
                keyword[0].word
              ) : (
                <Skeleton
                  variant="text"
                  width={'70%'}
                  sx={{ borderRadius: '0.5rem' }}
                />
              )}
            </Typography>

            {/* phonetics */}
            <Typography variant="h4" fontFamily={'georgeia'}>
              {keyword.length !== 0 ? (
                <>&#92;{keyword[0]?.phonetics[0]?.text}&#92;</>
              ) : (
                <Skeleton
                  variant="text"
                  height={40}
                  width={'30%'}
                  sx={{ borderRadius: '0.5rem' }}
                />
              )}
            </Typography>

            <Divider variant="middle" sx={{ mt: '1rem' }} />

            {keyword.length !== 0 ? (
              keyword[keyword.length - 1].defNumArr.map((num, index) => {
                return (
                  <Grow in>
                    <Grid container key={index}>
                      <Grid item xs={12} sm={12} md={12} sx={{ mt: '1rem' }}>
                        <Typography
                          variant="h5"
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
                            ml: '1.3rem',
                            '&::before': {
                              content: "'Def.: '",
                              color: 'red',
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
                              ml: '1.3rem',
                              '&::before': {
                                content: "'E.g.: '",
                                color: 'red',
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
                  </Grow>
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
        </Grid>
      </Paper>
    </div>
  );
};

export default DictionaryPanel;
