import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { StepperComp, ToggleButtons } from "../components";

import ImageLinks from "../ImagesLinks";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function AddProperty() {
  return (
    <Box sx={ { width: "100%" } }>
      <Box
        sx={ {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 6,
          background: "#FFFFFF",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          py: 1,
        } }
      >
        <Typography
          sx={ {
            color: "#0A3A67",
            fontSize: "24px",
            lineHeight: "36px",
            fontWeight: 600,
          } }
        >
          Add Property
        </Typography>
        <Box
          sx={ {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          } }
        >
          <img width="44px" src={ ImageLinks.memoji } alt="memoji" />
          <Box>
            <Typography
              sx={ { fontSize: "17px", color: "#263238", fontWeight: 500 } }
            >
              CrossFit
            </Typography>
            <Typography
              sx={ {
                fontSize: "16px",
                color: "#75013D",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
              } }
            >
              Profile <ArrowForwardIosIcon sx={ { fontSize: "15px", pl: 0.3 } } />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={ {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        } }
      >
        <StepperComp />
        <ToggleButtons />
      </Box>
    </Box>
  );
}
