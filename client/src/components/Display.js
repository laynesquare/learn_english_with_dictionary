import React from 'react';
import {
  Button,
  Paper,
  Typography,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import Documentation from './Documentation';
import { useEffect, useState } from 'react';
import ColorTabs from './ColorTabs';
import NoSearchResult from './NoSearchResult';
import Words from './Words';
// import { v4 as uuidv4 } from 'uuid';

const Display = () => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [panelSwitch, setPanelSwitch] = useState(true);
  const [open, setOpen] = useState(false);

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
      handleClickOpen();
    }
    if (
      typeof articles.response !== 'undefined' &&
      articles.integrity.length === 0
    ) {
      setPanelSwitch(true); //打開開關
      handleClickOpen();
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
      ></ColorTabs>
      <Paper
        variant="outlined"
        sx={{
          // borderRadius: '0.5rem',
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
                        sx={{ height: '400px' }}
                      />

                      <Typography
                        variant="h6"
                        sx={{ margin: '0.5rem', display: 'block' }}
                      >
                        <Words
                          article={articles.response.docs[articleID].abstract}
                          articleID={articleID}
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

      {/* down below is a dialog triggered when textfield is empty */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Cannot find anything.</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Enter another keyword for search.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="large">
            Got it.
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Display;
