import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ImagesLinks from "../../ImagesLinks";
import "./MiniDrawer.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  borderRight: 0,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

 function MiniDrawer() {
  let navItems = [
    {
      name: "Dashboard",
      route: "/",
      icon: ImagesLinks.dashboardIcon,
    },
    {
      name: "Properties",
      route: "/add-property",
      icon: ImagesLinks.propertiesIcon,
    },
    {
      name: "Requests",
      route: "#",
      icon: ImagesLinks.requestsIcon,
    },
    {
      name: "Calendar",
      route: "#",
      icon: ImagesLinks.calendarIcon,
    },
    {
      name: "Settings",
      route: "#",
      icon: ImagesLinks.settingsIcon,
    },
    {
      name: "Help",
      route: "#",
      icon: ImagesLinks.helpIcon,
    },
  ];
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const handleDrawer = () => setOpen((state) => !state);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader style={{ justifyContent: "center", cursor: "pointer" }}>
        {open ? (
          <>
            <img
              style={{ padding: "46px 0" }}
              src={ImagesLinks.largeLogoIcon}
              alt="logo"
              onClick={handleDrawer}
            />
          </>
        ) : (
          <>
            <img
              src={ImagesLinks.smallLogoIcon}
              alt="logo"
              onClick={handleDrawer}
            />
          </>
        )}
      </DrawerHeader>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate("/dashboard" + item.route)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={item.icon} alt={item.name} />
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{
                  opacity: open ? 1 : 0,
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "#0A3A67",
                  lineHeight: "28.5px",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ mt: 16 }}>
        <ListItem key="Sign Out" disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {}}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src={ImagesLinks.signOut} alt="Sign Out" />
            </ListItemIcon>
            <ListItemText
              primary="Sign Out"
              sx={{
                opacity: open ? 1 : 0,
                fontSize: "19px",
                fontWeight: 800,
                color: "#0A3A67",
                lineHeight: "28.5px",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
export default MiniDrawer
