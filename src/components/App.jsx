import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import Root from '../routes/Root';
import { Actors, MovieInfo, Profile, Movies } from '.';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'profile/:id',
        element: <Profile />,
      },
      {
        index: true,
        element: <Movies />,
      },
      {
        path: 'movie/:id',
        element: <MovieInfo />,
      },

      {
        path: 'actors/:id',
        element: <Actors />,
      },
    ],
  },
]);

function App() {
  const theme = createTheme({});
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>
          <CssBaseline />
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
