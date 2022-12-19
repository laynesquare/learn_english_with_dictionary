import {
  StepContent,
  Typography,
  Container,
  StepLabel,
  Divider,
  Stepper,
  Step,
  Box,
} from '@mui/material';
import { useState } from 'react';
import { theme } from '../../themes/theme.js';
import CheerfulGirl from './CheerfulGirl.js';

const Documentation = () => {
  const [hoveredStep, setHoveredStep] = useState(-1);

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: '300px', margin: 'auto' }}>
        <CheerfulGirl />
      </Box>

      <Divider sx={{ mb: '1rem' }}>
        <Typography
          variant="h4"
          color={theme.palette.primary.main}
          gutterBottom
        >
          Let's Get Started
        </Typography>
      </Divider>

      <Stepper
        orientation="vertical"
        activeStep={hoveredStep}
        onMouseLeave={() => setHoveredStep(-1)}
      >
        {steps.map((step, index) => (
          <Step key={step.label} onMouseEnter={() => setHoveredStep(index)}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent></StepContent>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};

const steps = [
  { label: 'Input a keyword and click the search icon.' },
  { label: 'The search results will be displayed.' },
  {
    label: `Click a word to see the def. on the dictionary panel from the right. 
          Whereas on mobile devices, the dictionary panel will pop up automatically.`,
  },
  {
    label: ` If there is no def. for the word, "none" will be displayed instead.`,
  },
];

export default Documentation;
