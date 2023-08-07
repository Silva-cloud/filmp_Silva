import { useTheme } from '@emotion/react';

export default () => {
  const theme = useTheme();

  return {

    imageLink: {
      display: 'flex',
      justifyContent: 'center',
      padding: '10% 0',
    },
    image: {
      width: '70%',
    },
    links: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
    genreImage: {
      filter: theme.palette.mode == 'dark' ? 'dark' : 'invert(1)',
    },
  };
};
