import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Property Type", "Property Details", "Property Location"];

function StepperComp() {
  return (
    <Box sx={ { width: "610px", pt: 4 } }>
      <Stepper activeStep={ 1 } alternativeLabel>
        { steps.map((label) => (
          <Step key={ label }>
            <StepLabel
              sx={ { color: "#455A64", fontSize: "16px", lineHeight: "24px" } }
            >
              { label }
            </StepLabel>
          </Step>
        )) }
      </Stepper>
    </Box>
  );
}
export default StepperComp
