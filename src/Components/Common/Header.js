import React, { useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/authHooks";
import useLogout from "../../hooks/useLogout";
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import AppButton from "./AppButton";
import { ROUTES } from "../../utils/constants";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import ActivePackageChip from "./ActivePackageChip";
import RemainingToken from "./RemainingToken";

export const Header = () => {
  const { loggedInUser } = useAuth();
  const isLoggedIn = loggedInUser && !!loggedInUser?.id;
  const [showMenu, setShowMenu] = useState(false);
  const [appSettingsMenuAnchorEl, setAppSettingsMenuAnchorEl] = useState(null);
  const { logoutUser } = useLogout();
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setShowMenu(!showMenu);
    setAppSettingsMenuAnchorEl(event.currentTarget);
  };

  const handleAppSettingsMenuClose = () => {
    setAppSettingsMenuAnchorEl(null);
  };

  const logoutHandler = () => {
    logoutUser(() => {
      setShowMenu(!showMenu);
    });
  };

  return (
    <Stack className="header-main" direction="row" sx={{ padding: "16px" }}>
      <img src="/images/faisaliteb-logo.png" alt="faisaliteb" />
      {!isLoggedIn && (
        <div className="header-link">
          {ROUTES.map((route) => (
            <NavLink
              to={route.path}
              key={route.name}
              className="link-decoration"
            >
              <div className="link-style">{route.name}</div>
            </NavLink>
          ))}
        </div>
      )}
      {isLoggedIn ? (
        <>
          <Avatar
            src="/images/profile.png"
            sx={{
              cursor: "pointer",
            }}
            onClick={handleMenuClick}
          />
          <Menu
            anchorEl={appSettingsMenuAnchorEl}
            open={!!appSettingsMenuAnchorEl}
            slotProps={{
              paper: {
                sx: { width: "240px", marginTop: "8px" },
              },
            }}
            onClose={handleAppSettingsMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Stack
              sx={{
                padding: "6px 16px",
              }}
              spacing={1}
            >
              <ActivePackageChip />
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Remaining Token:
                </Typography>
                <RemainingToken />
              </Stack>
            </Stack>
            <Divider sx={{ margin: "8px 0" }} />
            <MenuItem
              onClick={() => {
                navigate("/dashboard");
                handleAppSettingsMenuClose();
              }}
            >
              <ListItemIcon>
                <DashboardRoundedIcon />
              </ListItemIcon>
              Dashboard
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/profile");
                handleAppSettingsMenuClose();
              }}
            >
              <ListItemIcon>
                <AccountBoxRoundedIcon />
              </ListItemIcon>
              My account
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                logoutHandler();
                handleAppSettingsMenuClose();
              }}
            >
              <ListItemIcon>
                <ExitToAppRoundedIcon />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
          <AppButton variant="outlined" href="/signup">
            Register
          </AppButton>
          <AppButton variant="contained" href="/login">
            Login
          </AppButton>
        </Stack>
      )}
    </Stack>
  );
};
