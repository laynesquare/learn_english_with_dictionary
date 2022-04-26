import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

const NoArticlesPrompt = ({ handleDialogClose, dialogOpen }) => {
  return (
    <Dialog
      open={dialogOpen}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="Textfield_cannot_be_empty">
        Cannot find any passages
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Enter another keyword for search.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} size="large">
          Got It
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoArticlesPrompt;
