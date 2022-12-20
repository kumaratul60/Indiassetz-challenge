import React from "react";
import { Box } from "@mui/material";
import ImageLinks from "../../ImagesLinks";
import Typography from "@mui/material/Typography";

function Insights() {
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="72.03px"
          height="86px"
          src={ImageLinks.memoji}
          alt="memoji"
        />
        <Box>
          <Typography
            sx={{ fontSize: "20px", color: "#858585", fontWeight: 600 }}
          >
            Welcome
          </Typography>
          <Typography
            sx={{ fontSize: "24px", color: "#0A3A67", fontWeight: 600 }}
          >
           Elon
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {[
          { value: "180", title: "Total Onboardings" },
          { value: "80k", title: "Total Revenue" },
          { value: "60", title: "Total Properties" },
        ].map((item, index) => (
          <Box
            sx={{
              m: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "38px",
                fontWeight: 600,
                lineHeight: "57px",
                color: "#0A3A67",
              }}
            >
              {item.value}
            </Typography>
            <Typography
              sx={{ color: "#0A3A67", fontSize: "15px", fontWeight: 600 }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
export default Insights
