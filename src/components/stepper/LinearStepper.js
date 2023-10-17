import React, { useState } from "react";


import Typography from "@mui/material/Typography";



import {
    Button, TextField, Stepper,
    Step,
    StepLabel,
    Grid,

} from "@mui/material";

import Select from 'react-select'



import Box from '@mui/material/Box';



function getSteps() {
    return [
        "Basic information",
        "Contact Information",
        "Personal Information",
        "Payment",
    ];
}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


function getStepContent(step) {




    switch (step) {
        case 0:
            return (





                <>

                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={8}>
                            <TextField
                                id="first-name"
                                label="Enter Member Name"
                                variant="outlined"
                                placeholder="Enter Member Name"
                                fullWidth
                                margin="normal"
                                name="memberName"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="first-name"
                                label="Enter Member Name"
                                variant="outlined"
                                placeholder="Enter Member Name"
                                fullWidth
                                margin="normal"
                                name="memberName"
                            />
                        </Grid>
                    </Grid>









                    <Select
                        name="form-field-Country"
                        value="one"
                        className="menu-outer-top"
                        placeholder=" Please choose a country"
                        // value={Country.value}
                        clearable={false}
                        options={options}
                    // onChange={this.SelecCountryChange}
                    // optionComponent={CountryOption}

                    />

                    <Select options={options} />

                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        placeholder="Enter Your Last Name"
                        fullWidth
                        margin="normal"
                        name="lastName"
                    />
                    <TextField
                        id="nick-name"
                        label="Nick Name"
                        variant="outlined"
                        placeholder="Enter Your Nick Name"
                        fullWidth
                        margin="normal"
                        name="nickName"
                    />
                </>
            );

        case 1:
            return (
                <>
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        margin="normal"
                        name="emailAddress"
                    />
                    <TextField
                        id="phone-number"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        margin="normal"
                        name="phoneNumber"
                    />
                    <TextField
                        id="alternate-phone"
                        label="Alternate Phone"
                        variant="outlined"
                        placeholder="Enter Your Alternate Phone"
                        fullWidth
                        margin="normal"
                        name="alternatePhone"
                    />
                </>
            );
        case 2:
            return (
                <>
                    <TextField
                        id="address1"
                        label="Address 1"
                        variant="outlined"
                        placeholder="Enter Your Address 1"
                        fullWidth
                        margin="normal"
                        name="address1"
                    />
                    <TextField
                        id="address2"
                        label="Address 2"
                        variant="outlined"
                        placeholder="Enter Your Address 2"
                        fullWidth
                        margin="normal"
                        name="address2"
                    />
                    <TextField
                        id="country"
                        label="Country"
                        variant="outlined"
                        placeholder="Enter Your Country Name"
                        fullWidth
                        margin="normal"
                        name="country"
                    />
                </>
            );
        case 3:
            return (
                <>
                    <TextField
                        id="cardNumber"
                        label="Card Number"
                        variant="outlined"
                        placeholder="Enter Your Card Number"
                        fullWidth
                        margin="normal"
                        name="cardNumber"
                    />
                    <TextField
                        id="cardMonth"
                        label="Card Month"
                        variant="outlined"
                        placeholder="Enter Your Card Month"
                        fullWidth
                        margin="normal"
                        name="cardMonth"
                    />
                    <TextField
                        id="cardYear"
                        label="Card Year"
                        variant="outlined"
                        placeholder="Enter Your Card Year"
                        fullWidth
                        margin="normal"
                        name="cardYear"
                    />
                </>
            );
        default:
            return "unknown step";
    }
}

const LinearStepper = () => {
    // const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
    };

    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block" }}
                            >
                                optional
                            </Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center">
                    Thank You
                </Typography>
            ) : (
                <>
                    <form>{getStepContent(activeStep)}</form>
                    <Button
                        // className={classes.button}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        back
                    </Button>
                    {isStepOptional(activeStep) && (
                        <Button
                            // className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={handleSkip}
                        >
                            skip
                        </Button>
                    )}
                    <Button
                        // className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                    >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </>
            )}
        </div>
    );
};

export default LinearStepper;