import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

const NoArticlesPrompt = ({ openNoResultPrompt, setOpenNoResultPrompt }) => {
  return (
    <Dialog
      open={openNoResultPrompt}
      onClose={setOpenNoResultPrompt}
      aria-labelledby="Textfield-cannot-be-empty"
      aria-describedby="Enter-another-keyword–for-search"
    >
      <DialogTitle id="Textfield-cannot-be-empty">
        Cannot find any passages
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="Enter-another-keyword–for-search">
          Enter another keyword for search.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={openNoResultPrompt} size="large">
          Got It
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoArticlesPrompt;
