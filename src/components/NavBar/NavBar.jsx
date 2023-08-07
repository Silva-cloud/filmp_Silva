import { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery, Typography } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Box, display } from '@mui/system';
import useStyles from './styles';
import profileImage from '../../../misc/images/profileImg.jpg';
import { Sidebar } from '..';

function NavBar() {
  const styles = useStyles();
  const theme = useTheme();
  const isAuthenticated = true;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>

      <AppBar position="sticky">
        <Toolbar sx={styles.toolbar}>
          <IconButton
            color="inherit"
            edge="start"
            sx={{
              outline: 'none',
              ...styles.menuButton,
            }}
            onClick={() => setMobileOpen(true)}
          >
            <Menu />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              ml: 1,
            }}
            onClick={() => {}}
          >
            {theme.palette.mode == 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Typography sx={{
            display: { xs: 'none', sm: 'inline' },
          }}
          >displaySearch not on mobile
          </Typography>
          <div>
            {!isAuthenticated
              ? (
                <Button color="inherit" onClick={() => {}}>
                  Login &nbsp; <AccountCircle />
                </Button>
              )
              : (
                <Button
                  color="inherit"
                  component={NavLink}
                  to="/profile/:id"
                  onClick={() => {}}
                  sx={{
                    ...styles.linkButton,
                  }}
                >
                  <Typography sx={{ display: { xs: 'none', sm: 'inline' } }}>My Movies &nbsp;</Typography>
                  <Avatar
                    sx={{
                      width: 30, height: 30,
                    }}
                    alt="profile"
                    src={profileImage}
                  />
                </Button>
              )}
          </div>
          <Typography sx={{
            display: { xs: 'inline', sm: 'none' },
          }}
          >displaySearch on mobile
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Box component="nav" sx={styles.drawer}>
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            classes={{ paper: styles.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>

          <Drawer
            classes={{ paper: styles.drawerPaper }}
            variant="permanent"
            open
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        </Box>
      </div>
    </>
  );
}

export default NavBar;
