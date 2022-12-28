import { useMediaQuery, Container, Grid } from '@mui/material';
import { theme } from './themes/theme';
import DictionaryPanel from './components/DictionaryPanel/DictionaryPanel';
import HeadsUp from './components/HeadsUp/HeadsUp';
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './index.css';

const App = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <HeadsUp />
      <Container maxWidth="xl" sx={{ ...appStyle.mostOuter }}>
        <Header />
        <Grid container spacing={3} sx={{ mt: '0.5rem' }}>
          <Grid item xs={12} lg={8}>
            <Display />
          </Grid>
          <Grid item lg={4} sx={{ ...appStyle.dicPanel }}>
            {!isMobile && <DictionaryPanel />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

const appStyle = {
  mostOuter: {
    minHeight: '100vh',
    minWidth: '360px',
    p: '1rem 1rem',
  },

  title: { pt: '2rem', fontFamily: 'Moul' },

  subTitle: {
    fontFamily: 'Moul',
    width: '80',
    ml: 'auto',
    mr: 'auto',
    mb: '2rem',
  },

  dicPanel: {
    alignSelf: 'start',
    position: 'sticky',
    mt: '4rem',
    top: '0',
  },
};

export default App;
