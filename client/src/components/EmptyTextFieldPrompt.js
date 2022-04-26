import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

const EmptyTextFieldPrompt = ({ dialogOpen, handleDialogClose }) => {
  return (
    <Dialog
      open={dialogOpen}
      onClose={handleDialogClose}
      aria-labelledby="EmptyTextFieldPrompt"
      aria-describedby="Textfield_cannot_be_empty"
    >
      <DialogTitle id="Textfield_cannot_be_empty">
        Textfield cannot be empty
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="Enter_a_keyword_for_search">
          Enter a keyword for search.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} size="small">
          Got It
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmptyTextFieldPrompt;
