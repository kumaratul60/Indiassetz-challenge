import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ImageLinks from "../../ImagesLinks";
import { Box, Typography } from "@mui/material";

function ToggleButtons() {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box
      sx={ {
        mt: 6,
        p: 4,
        background: "#FFFFFF",
        boxShadow:
          "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05)",
        borderRadius: "10px",
        textAlign: "center",
      } }
    >
      <Typography
        sx={ { color: "#75013D", fontSize: "26px", fontWeight: "600", pb: 3 } }
      >
        Select Property Type
      </Typography>
      <ToggleButtonGroup value={ alignment } onChange={ handleAlignment }>
        <ToggleButton
          value="left"
          sx={ {
            mr: 2,
            p: 2,
            background: alignment === "left" ? "#75013D" : "#F7F7F7",
            border: "1px solid #DEDEDE",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          } }
        >
          <img
            width="140px"
            src={ ImageLinks.resedentialProperty }
            alt="res-prop"
          />
          <Typography
            sx={ {
              fontSize: "18px",
              pt: 2,
              textTransform: "capitalize",
              letterSpacing: "2%",
              fontWeight: 600,
              color: "#FFFFFF",
            } }
          >
            Residential
          </Typography>
        </ToggleButton>
        <ToggleButton
          value="right"
          sx={ {
            ml: 2,
            p: 2,
            background: alignment === "right" ? "#75013D" : "#F7F7F7",
            border: "1px solid #DEDEDE",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          } }
        >
          <img
            width="140px"
            src={ ImageLinks.commercialProperty }
            alt="comm-prop"
          />
          <Typography
            sx={ {
              fontSize: "18px",
              pt: 2,
              textTransform: "capitalize",
              letterSpacing: "2%",
              fontWeight: 500,
              color: "#0A3A67",
            } }
          >
            Commercial
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
export default ToggleButtons
