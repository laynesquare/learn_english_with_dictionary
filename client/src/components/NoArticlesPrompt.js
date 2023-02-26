import {
  DialogContentText,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
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
      <DialogTitle id="Textfield-cannot-be-empty" fontWeight="bold">
        Oops, cannot find any passages ...
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="Enter-another-keyword–for-search"
          variant="body2"
        >
          Enter <b>another keyword</b> for search. Or you make{' '}
          <b>too many requests</b> within a short time. Sorry, it's New York
          Times' fault. You might have to wait around 30 secs to make a search.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => setOpenNoResultPrompt(false)}
          size="small"
        >
          Got it
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoArticlesPrompt;
