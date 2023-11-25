import React, { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// eslint-disable-next-line no-unused-vars
import { logout } from "../../firebase";
import "../../css/dashboard.css";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  // eslint-disable-next-line no-unused-vars
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/movies/homePage" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    {
      label: "More",
      subOptions: [
        { label: "Trending", path: "/movies/trending" },
        { label: "Now Playing", path: "/movies/nowPlaying" },
        { label: "Top Rated", path: "/movies/topRated" },
        { label: "Dashboard", path: "../firebase/dashboard.js" },
      ],
    },
  ];

  const anchorRef = useRef(null);

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handleOutsideClick = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setPopoverAnchorEl(null);
    }
  };

  // Attach click event listener for handling clicks outside the popover
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [popoverAnchorEl]);

  const handleCloseMenu = () => {
    setPopoverAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" color="secondary" sx={{ backgroundColor: "lightslategray" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Popover
                id="menu-appbar"
                anchorEl={popoverAnchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(popoverAnchorEl)}
                onClose={handleCloseMenu}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => {
                      handleMenuSelect(opt.path);
                      handleCloseMenu(); // Close the menu after selecting an option
                    }}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Popover>
            </>
          ) : (
            <>
              {menuOptions.map((opt) =>
                opt.subOptions ? (
                  <IconButton
                    key={opt.label}
                    color="inherit"
                    onClick={(event) => {
                      handleMenu(event);
                      setPopoverAnchorEl(event.currentTarget);
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Button>
                )
              )}
              {popoverAnchorEl && (
                <Popover
                  anchorEl={popoverAnchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(popoverAnchorEl)}
                  onClose={handleCloseMenu}
                >
                  {menuOptions
                    .find((opt) => Boolean(opt.subOptions))
                    .subOptions.map((subOpt) => (
                      <MenuItem
                        key={subOpt.label}
                        onClick={() => {
                          handleMenuSelect(subOpt.path);
                          handleCloseMenu(); // Close the menu after selecting an option
                        }}
                      >
                        {subOpt.label}
                      </MenuItem>
                    ))}
                </Popover>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;