import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';

export default function ColorTabs({ setPanelSwitch, panelSwitch, articles }) {
  const [value, setValue] = React.useState('one');

  useEffect(() => {
    if (panelSwitch === true) {
      setValue('one');
    }
    if (panelSwitch === false) {
      setValue('two');
    }
  }, [panelSwitch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 'one') {
      setPanelSwitch(true);
    }
    if (newValue === 'two') {
      setPanelSwitch(false);
    }
  };

  return (
    <Box sx={{ width: '80%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        aria-label="panel switching"
        sx={{ height: '4rem' }}
      >
        <Tab
          icon={<HomeIcon />}
          iconPosition="start"
          disableRipple={true}
          value="one"
          label="Home"
          sx={{ textTransform: 'none' }}
        />
        <Tab
          icon={<ArticleSharpIcon />}
          iconPosition="start"
          disableRipple={true}
          value="two"
          label="Result"
          sx={{ textTransform: 'none' }}
          disabled={!Boolean(articles?.integrity?.length)}
        />
      </Tabs>
    </Box>
  );
}
