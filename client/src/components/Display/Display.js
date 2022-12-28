import {
  useMediaQuery,
  Typography,
  CardMedia,
  Skeleton,
  Paper,
  Chip,
  Card,
  Grow,
  Box,
  Tab,
  Tabs,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { LOADING_ARTICLES } from '../../constants/actionTypes';
import { fetchArticles } from '../../actions/articles.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { theme } from '../../themes/theme.js';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import NoArticlesPrompt from '../NoArticlesPrompt';
import Documentation from './Documentation';
import HomeIcon from '@mui/icons-material/Home';
import Words from './Words';
import Grid from '@mui/material/Grid';

const [HOME, RESULT] = ['Home', 'Result'];

const Display = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const articles = useSelector((state) => state.articles);
  const [openNoResultPrompt, setOpenNoResultPrompt] = useState(false);
  const [currentPanel, setCurrentPanel] = useState(HOME);

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
  const dispatch = useDispatch();
  if (currentPanel !== RESULT) return null;
  if (articles === LOADING_ARTICLES) return <ResultSkeleton />;
  if (!articles) return null;

  return (
    <>
      {articles.map((piece, idx) => {
        const {
          lead_paragraph,
          multimedia,
          headline,
          abstract,
          keywords,
          web_url,
        } = piece;
        return (
          <Grow in key={idx}>
            <Grid item xs={12} md={6}>
              <Card sx={{ ...resultStyle.articleCard }}>
                <CardImg web_url={web_url} idx={idx} multimedia={multimedia} />
                <Box p={1.5}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    <Words wordSrc={headline?.main} />
                  </Typography>
                  <Typography variant="h7">
                    <Words wordSrc={abstract} />
                  </Typography>
                  <Typography variant="h7">
                    <Words wordSrc={lead_paragraph} />
                  </Typography>
                  {keywords.length > 0 && (
                    <Box sx={{ ...resultStyle.keywordChip }}>
                      {keywords.slice(0, 3).map((keyword, idx) => (
                        <Chip
                          key={idx}
                          clickable
                          size="small"
                          variant="outlined"
                          label={keyword.value.toUpperCase()}
                          onClick={() => dispatch(fetchArticles(keyword.value))}
                          sx={{ overflow: 'hidden' }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </Card>
            </Grid>
          </Grow>
        );
      })}
    </>
  );
};

const CardImg = ({ web_url, idx, multimedia }) => {
  const [isHover, setIsHover] = useState(null);

  return (
    <CardMedia
      onClick={() => window.open(web_url)}
      onMouseEnter={() => setIsHover(idx)}
      onMouseLeave={() => setIsHover(null)}
      image={`https://www.nytimes.com/${multimedia[0].url}`}
      sx={{ ...resultStyle.img(isHover, idx) }}
    />
  );
};

const ResultSkeleton = () => {
  const articleCardArr = [...Array(6).keys()];

  return (
    <>
      {articleCardArr.map((_, idx) => {
        return (
          <Grow in key={idx}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ wordWrap: 'break-word', borderRadius: '8px' }}
            >
              <Card sx={{ bgcolor: 'transparent' }}>
                <Skeleton
                  variant="rectangle"
                  height={'300px'}
                  width={'100%'}
                  animation="wave"
                />
                <Box p={2}>
                  <Skeleton sx={{ width: '100%' }} />
                  <Skeleton sx={{ width: '100%' }} />
                  <Skeleton sx={{ width: '100%' }} />
                </Box>
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
    position: 'relative',
    bgcolor: 'transparent',
  },

  keywordChip: {
    columnGap: '10px',
    flexWrap: 'wrap',
    display: 'flex',
    rowGap: '15px',
    p: '16px 8px',
  },

  img(isHover, idx) {
    return {
      transition: 'all 0.1s ease-in',
      cursor: 'pointer',
      height: '300px',

      '&::before': {
        transition: 'padding 0.4s ease-in-out, opacity 0.3s ease-in',
        fontFamily: 'Moul',
        textAlign: 'center',
        position: 'absolute',
        fontSize: '1.5rem',
        content: "'Read in full on NYT'",
        width: '100%',
        color: 'white',
        background:
          'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
        p: isHover === idx ? '2rem 0 8rem 0' : '0',
        opacity: isHover === idx ? '100%' : '0%',
      },
    };
  },
};

export default Display;
