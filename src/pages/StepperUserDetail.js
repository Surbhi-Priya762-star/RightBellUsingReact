import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Education from "../My Components/StepperComponents/Education";
import Employment from "../My Components/StepperComponents/Employement";
import Accoumplishment from "../My Components/StepperComponents/Accoumplishment";
import { stepperStyle } from "../styles/stepperStyle";
import { stepperNextContext } from "../utils/stepperNextContext";

const steps = ["Education", "Employement", "Accomplishment"];

export default function HorizontalLinearStepper() {
  const {
    currentPage,
    setCurrentPage,
    setActiveStep,
    activeStep,
    skipped,
    setSkipped,
  } = useContext(stepperNextContext);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    setCurrentPage((previousData) => previousData + 1);
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setCurrentPage((previousData) => previousData + 1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <nav style={{ ...stepperStyle.navbar }}>
        <img
          style={{ flex: 1 }}
          src={"/Images/logo.png"}
          width="200"
          height="150"
          className="d-inline-block align-top"
          alt="Right Bell logo"
        />
        <div style={{ flex: 5, alignSelf: "center", background: "white" }}>
          <Stepper
            activeStep={activeStep}
            style={{
              padding: "35px",
              borderRadius: "6px",
            }}
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
      </nav>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {currentPage === 0 ? (
            <Education />
          ) : currentPage === 1 ? (
            <Employment />
          ) : currentPage === 2 ? (
            <Accoumplishment />
          ) : null}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleNext}
              style={{ padding: "10px", width: "100px" }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </>
  );
}
