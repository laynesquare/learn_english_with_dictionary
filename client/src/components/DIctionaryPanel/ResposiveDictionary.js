import { Modal, Box } from '@mui/material';
import DictionaryPanel from './DictionaryPanel';

const ResposiveDictionary = ({ rwdDictionary, setRwdDictionary }) => {
  return (
    <Modal
      open={rwdDictionary}
      onClose={() => setRwdDictionary(false)}
      aria-labelledby="Responsive_dictionary"
      aria-describedby="Responsive_dictionary"
    >
      <Box sx={style}>
        <DictionaryPanel />
      </Box>
    </Modal>
  );
};

const style = {
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  minWidth: '360px',
  position: 'absolute',
  maxWidth: '80%',
  left: '50%',
  top: '50%',
};

export default ResposiveDictionary;
