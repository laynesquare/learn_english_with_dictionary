import {
  useMediaQuery,
  Typography,
  CardMedia,
  Skeleton,
  Paper,
  Card,
  Grow,
  Box,
  Tab,
  Tabs,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { LOADING_ARTICLES } from '../../constants/actionTypes';
import { useSelector } from 'react-redux';
import { theme } from '../../themes/theme.js';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import NoArticlesPrompt from '../NoArticlesPrompt';
import Documentation from './Documentation';
import HomeIcon from '@mui/icons-material/Home';
import Words from '../DictionaryPanel/Words';
import Grid from '@mui/material/Grid';

const [HOME, RESULT] = ['Home', 'Result'];

const Display = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const articles = useSelector((state) => state.articles);
  const [openNoResultPrompt, setOpenNoResultPrompt] = useState(false);
  const [currentPanel, setCurrentPanel] = useState(HOME);

  console.log(articles);

  useEffect(() => {
    if (!articles) {
      setCurrentPanel(HOME);
      setOpenNoResultPrompt(true);
      return;
    }
    if (articles.length) return setCurrentPanel(RESULT);
  }, [articles]);

  return (
    <>
      <Box sx={{ width: '80%' }}>
        <Tabs
          value={currentPanel}
          onChange={(_, panel) => setCurrentPanel(panel)}
          indicatorColor="primary"
          aria-label="Home and result panels "
          sx={{ height: '4rem' }}
        >
          <Tab
            icon={<HomeIcon />}
            iconPosition="start"
            disableRipple={true}
            value={HOME}
            label={HOME}
            sx={{ textTransform: 'none' }}
          />
          <Tab
            icon={<ArticleSharpIcon />}
            iconPosition="start"
            disableRipple={true}
            value={RESULT}
            label={RESULT}
            sx={{ textTransform: 'none' }}
            disabled={!articles?.length}
          />
        </Tabs>
      </Box>

      <Paper variant="outlined" sx={{ mb: '1rem' }}>
        <Grid
          container
          spacing={isMobile ? 2 : 5}
          padding={isMobile ? 2 : 5}
          justifyContent={'center'}
        >
          <Home currentPanel={currentPanel} />
          <Result currentPanel={currentPanel} articles={articles} />
        </Grid>
      </Paper>

      <NoArticlesPrompt
        openNoResultPrompt={openNoResultPrompt}
        setOpenNoResultPrompt={setOpenNoResultPrompt}
      />
    </>
  );
};

const Home = ({ currentPanel }) => {
  if (currentPanel !== HOME) return null;

  return (
    <Grid item>
      <Typography variant="h5">
        <Documentation />
      </Typography>
    </Grid>
  );
};

const Result = ({ currentPanel, articles }) => {
  const [isHover, setIsHover] = useState(null);

  if (currentPanel !== RESULT) return null;
  if (articles === LOADING_ARTICLES) return <ResultSkeleton />;
  if (!articles) return null;

  return (
    <>
      {articles.map((piece, idx) => {
        const { multimedia, lead_paragraph, abstract, web_url, headline } =
          piece;
        return (
          <Grow in key={idx}>
            <Grid item xs={12} md={6} sx={{ wordWrap: 'break-word' }}>
              <Card sx={{ ...resultStyle.articleCard }}>
                <CardMedia
                  onClick={() => window.open(web_url)}
                  onMouseEnter={() => setIsHover(idx)}
                  onMouseLeave={() => setIsHover(null)}
                  image={`http://www.nytimes.com/${multimedia[0].url}`}
                  sx={{ ...resultStyle.img(isHover, idx) }}
                />
                <Box p={1.5}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    <Words abstract={headline?.main} />
                  </Typography>
                  <Typography variant="h7" sx={{}}>
                    <Words abstract={abstract} />
                  </Typography>
                  <Typography variant="h7" sx={{}}>
                    <Words abstract={lead_paragraph} />
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grow>
        );
      })}
    </>
  );
};

const ResultSkeleton = () => {
  const articleCardArr = [...Array(6).keys()];

  return (
    <>
      {articleCardArr.map((_, idx) => {
        return (
          <Grow in key={idx}>
            <Grid item xs={12} md={6} sx={{ wordWrap: 'break-word' }}>
              <Card sx={{ bgcolor: 'transparent', borderRadius: '2rem' }}>
                <Skeleton
                  variant="rectangle"
                  height={'300px'}
                  width={'100%'}
                  animation="wave"
                />

                <Skeleton variant="rectangle" height={'80px'} width={'100%'} />
              </Card>
            </Grid>
          </Grow>
        );
      })}
    </>
  );
};

const resultStyle = {
  articleCard: {
    borderRadius: '8px',
    bgcolor: 'transparent',
    position: 'relative',
  },

  img(isHover, idx) {
    return {
      transition: 'all 0.1s ease-in',
      cursor: 'pointer',
      height: '300px',

      '&::before': {
        transition: 'all 0.2s ease-in-out',
        fontFamily: 'Moul',
        textAlign: 'center',
        position: 'absolute',
        fontSize: '1.5rem',
        content: "'Read in full on NYT'",
        width: '100%',
        color: 'white',
        p: '2rem 0 8rem 0',
        background:
          'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
        transform: isHover === idx ? 'translateY(0px)' : 'translateY(-100%)',
      },
    };
  },
};

export default Display;
