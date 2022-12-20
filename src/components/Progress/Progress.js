import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

 function CircularStatic() {
  const [progress] = useState(80);
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        thickness={4}
        variant="determinate"
        value={progress}
        size={52}
        sx={{ color: "#000000" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div">
          {progress + "%"}
        </Typography>
      </Box>
    </Box>
  );
}
export default CircularStatic
