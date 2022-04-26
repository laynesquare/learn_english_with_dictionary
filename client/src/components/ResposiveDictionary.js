import { Modal, Box } from '@mui/material';
import DictionaryPanel from './DictionaryPanel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '80%',
  minWidth: '70%',
  boxShadow: 24,
};

const ResposiveDictionary = ({ dicModalOpen, handleDicModalClose }) => {
  return (
    <Modal
      open={dicModalOpen}
      onClose={handleDicModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <DictionaryPanel />
      </Box>
    </Modal>
  );
};

export default ResposiveDictionary;
