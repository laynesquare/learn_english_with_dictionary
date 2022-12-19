import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import SpeedDial from '@mui/material/SpeedDial';
import footerBg from '../../assets/footerBg.svg';

const Footer = () => {
  const [whetherTop, setWhetherTop] = useState(false);

  const updateScrollPosition = () => {
    if (window.scrollY === 0) return setWhetherTop(true);
    setWhetherTop(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
    return window.addEventListener('scroll', updateScrollPosition);
  });

  return (
    <Box sx={{ ...footerStyle.outerBox }}>
      <Typography variant="caption" sx={{ ...footerStyle.text }}>
        © 2023 Layne Chen. All Rights Reserved.
      </Typography>
      <Box
        sx={{
          ...footerStyle.navigateToTopBox,
          transform: !whetherTop ? 'translateY(0px)' : 'translateY(100px)',
        }}
      >
        <SpeedDial
          ariaLabel="Navigate to top"
          sx={{ '& .MuiFab-primary': { width: 50, height: 50 } }}
          icon={<ExpandLessRoundedIcon />}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        ></SpeedDial>
      </Box>
    </Box>
  );
};

const footerStyle = {
  outerBox: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${footerBg}')`,
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative',
    display: 'flex',
    height: '150px',
    width: '100%',
    p: '0 0 12px 0',
  },

  text: {
    fontWeight: 'bold',
    letterSpacing: '1px',
  },

  navigateToTopBox: {
    transition: 'all ease-in 0.2s',
    transform: 'translateY(0)',
    position: 'fixed',
    bottom: '16px',
    right: '16px',
  },
};

export default Footer;
