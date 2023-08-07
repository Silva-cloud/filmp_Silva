import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';
import { NavBar } from '../components';

function Root() {
  return (
    <Box sx={{
      display: 'flex',
      height: '100%',
      flexWrap: 'wrap',
    }}
    >
      <NavBar />
      <Box sx={{
        flexGrow: '1',
        padding: '2em',
      }}
      >
        <Box sx={{
          height: '70px',
        }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Root;
