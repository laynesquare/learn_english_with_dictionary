import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

const EmptyTextFieldPrompt = ({
  emptyTextFieldPrompt,
  setEmptyTextFieldPrompt,
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
          Got It
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmptyTextFieldPrompt;
