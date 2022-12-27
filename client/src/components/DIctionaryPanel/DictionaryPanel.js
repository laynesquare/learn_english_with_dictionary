import { Typography, Skeleton, Divider, Paper, Grid, Box } from '@mui/material';
import { LOADING_DICTIONARY } from '../../constants/actionTypes';
import { useSelector } from 'react-redux';
import { theme } from '../../themes/theme';

const DictionaryPanel = () => {
  let dictionary = useSelector((state) => state.dictionary);
  if (dictionary === LOADING_DICTIONARY) return <DicPanelSkeleton />;

  return (
    <Paper variant="outlined">
      <Grid container justifyContent="center" sx={{ ...dicStyle.mostOuter }}>
        <Typography variant="h3" color="secondary" sx={{ ...dicStyle.word }}>
          {dictionary.word}
        </Typography>

        <Typography variant="h4" sx={{ ...dicStyle.phonetic }}>
          {dictionary.phonetic}
        </Typography>

        <Divider variant="middle" sx={{ mt: '1rem' }} />

        {dictionary.meanings.map((entry, idx) => {
          const {
            definitions: [{ definition: mainDef, example }],
            partOfSpeech,
          } = entry;
          return (
            <Grid container key={idx}>
              <Grid item xs={12} sx={{ mt: '1rem' }}>
                <Typography variant="h6" sx={{ ...dicStyle.partOfSpeech }}>
                  {partOfSpeech}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography sx={{ ...dicStyle.mainDef }}>{mainDef}</Typography>
              </Grid>

              <Grid item xs={12}>
                {example && (
                  <Typography sx={{ ...dicStyle.example }}>
                    {example}
                  </Typography>
                )}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

const DicPanelSkeleton = () => {
  const defPerBox = Array.from(Array(3).keys());
  return (
    <>
      <Paper variant="outlined" sx={{ p: '2rem', overflowY: 'scroll' }}>
        <Skeleton
          variant="text"
          width={'70%'}
          height={80}
          sx={{ ...dicSkeletonStyle.wordAndPhonectic }}
        />

        <Skeleton
          variant="text"
          width={'30%'}
          height={50}
          sx={{ ...dicSkeletonStyle.wordAndPhonectic }}
        />

        <Divider variant="middle" sx={{ m: '1rem 0' }} />

        {defPerBox.map((idx) => (
          <Box key={idx} sx={{ ...dicSkeletonStyle.defPerBox }}>
            <Skeleton
              variant="circular"
              sx={{ ...dicSkeletonStyle.defPerBox.bulletPoint }}
            ></Skeleton>

            <Skeleton
              variant="rectangle"
              height={50}
              width={'90%'}
              sx={{ ...dicSkeletonStyle.defPerBox.defText }}
            />
          </Box>
        ))}
      </Paper>
    </>
  );
};

const dicStyle = {
  mostOuter: {
    p: '2rem',
    display: 'block',
    maxHeight: '90vh',
    overflowY: 'scroll',
  },

  word: {
    letterSpacing: '4px',
    textAlign: 'center',
    wordWrap: 'break-word',
    fontWeight: 'bold',
  },

  phonetic: {
    fontFamily: 'georgeia',
    textAlign: 'center',
  },

  partOfSpeech: { '&::before': { content: "'-'" } },

  mainDef: {
    ml: '0.5rem',
    '&::before': {
      content: "'Def.: '",
      color: theme.palette.secondary.main,
    },
  },

  example: {
    ml: '0.5rem',
    '&::before': {
      content: "'E.g. : '",
      color: theme.palette.secondary.main,
    },
  },
};

const dicSkeletonStyle = {
  wordAndPhonectic: {
    borderRadius: '0.5rem',
    display: 'block',
    margin: 'auto',
  },

  defPerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%',

    bulletPoint: {
      height: '0.5rem',
      width: '0.5rem',
      mt: '1rem',
    },

    defText: {
      borderRadius: '0.5rem',
      mt: '1rem',
      ml: '1rem',
    },
  },
};

export default DictionaryPanel;
