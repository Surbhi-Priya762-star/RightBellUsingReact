import React, { createContext } from "react";

export const stepperNextContext = createContext();

export const StepperNextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  return (
    <stepperNextContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        skipped,
        setSkipped,
        activeStep,
        setActiveStep,
      }}
    >
      {children}
    </stepperNextContext.Provider>
  );
};
