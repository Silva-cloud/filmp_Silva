import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, ListItemButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import useStyles from './styles';
import redLogo from '../../../misc/images/filmpireLogo/redLogo.png';
import blueLogo from '../../../misc/images/filmpireLogo/blueLogo.png';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Anime', value: 'anime' },
];
// const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
// const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <>

      <Box component={NavLink} to="/" sx={styles.imageLink}>
        <Box
          component="img"
          sx={styles.image}
          src={theme.palette.mode == 'light' ? blueLogo : redLogo}
          alt="Filmpire Logo"
        />
        {/* <img
              src={theme.palette.mode == 'light' ? blueLogo : redLogo}
              alt="Filmpire Logo"
            /> */}
      </Box>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Box component={NavLink} key={value} sx={styles.links} to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <Box component="img" src={redLogo} sx={styles.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Box>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Box component={NavLink} key={value} sx={styles.links} to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <Box component="img" src={redLogo} sx={styles.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Box>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
