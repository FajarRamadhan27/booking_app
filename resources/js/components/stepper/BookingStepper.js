import * as React from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Choose your seat',
    'Fill information',
    'Completed',
];

function BookingStepper() {
    return (
        <Box sx={{ width: '100%', mt: 5 }}>
            <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </Box>
    )
}

export default BookingStepper
