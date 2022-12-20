import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

function Header() {
  return (
    <Box sx={ { display: "flex", justifyContent: "space-between" } }>
      <TextField
        sx={ {
          width: "715px",
          background:
            "linear-gradient(90deg, #F1F1F1 -1.14%, rgba(241, 241, 241, 0) 105.04%)",
          borderRadius: "17.5px",
        } }
        placeholder="Search Properties, Services"
        InputProps={ {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        } }
        variant="outlined"
      />
      <Box
        sx={ {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        } }
      >
        <Box
          sx={ {
            background: "#FFFFFF",
            boxShadow:
              "4px 4px 47px rgba(0, 0, 0, 0.04), -2px -4px 13px rgba(255, 255, 255, 0.3), 6px 6px 36px rgba(0, 0, 0, 0.06)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "58px",
            position: "relative",
            py: 1,
            ":hover": {
              background: "#7791BA",
              cursor: "pointer",
            },
          } }
        >
          <Typography
            sx={ {
              position: "absolute",
              right: -4,
              top: -4,
              width: "24px",
              height: "24px",
              background: "#FF8A33",
              borderRadius: "50%",
              textAlign: "center",
              color: "#fff",
              fontSize: "15px",
            } }
          >
            2
          </Typography>
          <NotificationsNoneIcon sx={ { fontSize: "31px" } } />
        </Box>
        <Button
          sx={ {
            background: "#0A3A67",
            borderRadius: "12px",
            px: 3,
            mx: 4,
            py: 1,
          } }
          variant="contained"
          endIcon={ <AddCircleRoundedIcon /> }
        >
          Add Property
        </Button>
        <Button variant="text" sx={ { color: "#0A3A67", px: 0 } }>
          Super Admin
        </Button>
      </Box>
    </Box>
  );
}

export default Header