import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';

export default function ColorTabs({ setPanelSwitch, panelSwitch }) {
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
    <Box sx={{ width: '100%', ml: '1rem' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        aria-label="panel switching"
      >
        <Tab
          icon={<HomeIcon />}
          iconPosition="start"
          disableRipple={true}
          value="one"
          label="Home"
          sx={{ fontSize: '1rem' }}
        />
        <Tab
          icon={<ArticleSharpIcon />}
          iconPosition="start"
          disableRipple={true}
          value="two"
          label="Result"
          sx={{ fontSize: '1rem' }}
        />
      </Tabs>
    </Box>
  );
}
