import {
  DialogContentText,
  DialogContent,
  DialogActions,
  DialogTitle,
  Dialog,
  Button,
} from '@mui/material';

const EmptyTextFieldPrompt = ({
  setEmptyTextFieldPrompt,
  emptyTextFieldPrompt,
}) => {
  return (
    <Dialog
      open={emptyTextFieldPrompt}
      onClose={() => setEmptyTextFieldPrompt(false)}
      aria-labelledby="EmptyTextFieldPrompt"
      aria-describedby="Textfield_cannot_be_empty"
      sx={{ p: '1rem' }}
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
        <Button
          variant="contained"
          onClick={() => setEmptyTextFieldPrompt(false)}
          size="small"
        >
          Got it
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmptyTextFieldPrompt;
