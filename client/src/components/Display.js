import React from 'react';
import { Paper, Typography, Card, CardMedia, Grow } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import Documentation from './Documentation';
import { useEffect, useState } from 'react';
import ColorTabs from './ColorTabs';
import NoSearchResult from './NoSearchResult';
import NoArticlesPrompt from './NoArticlesPrompt';
import Words from './Words';

const Display = ({ handleDicModalOpen }) => {
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const [panelSwitch, setPanelSwitch] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  const articles = useSelector((state) => {
    return state.articles;
  });

  useEffect(() => {
    if (
      typeof articles.response !== 'undefined' &&
      articles.integrity.length === 0 &&
      panelSwitch
    ) {
      setPanelSwitch(true); //打開開關
      handleDialogOpen();
    }
    if (
      typeof articles.response !== 'undefined' &&
      articles.integrity.length === 0
    ) {
      setPanelSwitch(true); //打開開關
      handleDialogOpen();
    }
    if (
      typeof articles.response !== 'undefined' &&
      articles.integrity.length > 0
    ) {
      setPanelSwitch(false);
    }
  }, [articles]);

  return (
    <>
      <ColorTabs
        setPanelSwitch={setPanelSwitch}
        panelSwitch={panelSwitch}
        articles={articles}
      ></ColorTabs>
      <Paper
        variant="outlined"
        sx={{
          mb: '1rem',
        }}
      >
        <Grid container spacing={5} padding={5} justifyContent={'center'}>
          {typeof articles.response !== 'undefined' &&
          articles.integrity.length !== 0 &&
          !panelSwitch ? (
            articles.integrity.map((articleID) => {
              return (
                <Grow in key={articleID}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    sx={{ wordWrap: 'break-word' }}
                  >
                    <Card
                      sx={{
                        bgcolor: 'transparent',
                        borderRadius: '2rem',
                      }}
                    >
                      <CardMedia
                        image={`http://www.nytimes.com/${articles.response.docs[articleID].multimedia[0].url}`}
                        title="img-title"
                        sx={{ height: '300px' }}
                      />

                      <Typography
                        variant="h7"
                        sx={{ margin: '0.5rem', display: 'block' }}
                      >
                        <Words
                          article={articles.response.docs[articleID].abstract}
                          articleID={articleID}
                          handleDicModalOpen={handleDicModalOpen}
                        />
                      </Typography>
                    </Card>
                  </Grid>
                </Grow>
              );
            })
          ) : (
            <Grid item>
              <Typography variant="h5">
                {panelSwitch ? <Documentation /> : <NoSearchResult />}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Paper>

      <NoArticlesPrompt
        handleDialogClose={handleDialogClose}
        dialogOpen={dialogOpen}
      />
    </>
  );
};

export default Display;
