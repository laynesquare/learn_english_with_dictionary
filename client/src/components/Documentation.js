import { Typography, Container, Box, Divider } from '@mui/material';
import { theme } from '../themes/theme.js';
import SearchIcon from './SearchIcon.js';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Documentation = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: '150px',
          display: 'block',
          margin: 'auto',
          transform: 'translate(8%, 0)',
        }}
      >
        <SearchIcon />
      </Box>

      <Typography
        variant="h4"
        textAlign="center"
        color={theme.palette.primary.main}
        gutterBottom
      >
        How to use
      </Typography>

      <Divider variant="middle" sx={{ mb: '1rem' }}></Divider>

      <Typography
        variant="h7"
        sx={{ fontSize: '1rem', textAlign: 'center', listStyle: 'none' }}
        color={theme.palette.text.secondary}
      >
        <li>Input a keyword and click the search icon.</li>
        <ArrowDownwardIcon
          color="primary"
          sx={{
            margin: 'auto',
            display: 'block',
            fontSize: 'rem',
            m: '1rem auto',
          }}
        />
        <li>The search results will be displayed.</li>
        <ArrowDownwardIcon
          color="primary"
          sx={{
            margin: 'auto',
            display: 'block',
            fontSize: 'rem',
            m: '1rem auto',
          }}
        />
        <li>
          <Box
            component="span"
            sx={{ color: theme.palette.primary.main, fontSize: '1.5rem' }}
          >
            Click
          </Box>{' '}
          a word to see the def. on the dictionary panel from the right. Whereas{' '}
          <Box
            component="span"
            sx={{ color: theme.palette.primary.main, fontSize: '1.5rem' }}
          >
            on mobile
          </Box>{' '}
          devices, the dictionary panel will{' '}
          <Box
            component="span"
            sx={{ color: theme.palette.primary.main, fontSize: '1.5rem' }}
          >
            pop up automatically.
          </Box>
        </li>

        <ArrowDownwardIcon
          color="primary"
          sx={{
            margin: 'auto',
            display: 'block',
            fontSize: 'rem',
            m: '1rem auto',
          }}
        />
        <li>
          If there is no def. for the word, "none" will be displayed in the
          dictionary panel.
        </li>
      </Typography>
    </Container>
  );
};

export default Documentation;
