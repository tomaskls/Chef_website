import './App.css'
import { DrawerAppBar } from './components/Nav'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HeroCard } from './components/Hero';
import { Video } from './components/video/Video';
import { MyGallery } from './components/Gallery';
import { ContactCard } from './components/Contacts';
import { Footer } from './components/Footer';
import { ServiceCards } from './components/Servises';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontFamily: '"Great Vibes", cursive',
      fontSize: '4rem',
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
      lineHeight: 1.2,
      marginBottom: '0.5em',
    },
    h2: {
      fontFamily: '"DM Serif Display", serif',
    },
    h3: {
      fontFamily: '"DM Serif Display", serif',
    },
    h4: {
      fontFamily: '"DM Serif Display", serif',
    },
    h5: {
      fontFamily: '"DM Serif Display", serif',
    },
    h6: {
      fontFamily: '"DM Serif Display", serif',
    },
    button: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
      textTransform: 'none', // Kad mygtukai nebūtų CAPSLOCK
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
  },
  // Papildomi temos nustatymai
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          '&::first-letter': {
            fontSize: '120%',
            color: 'primary.main',
          },
        },
      },
    },
  },
});

// const lightTheme = createTheme({
//   palette: {
//     mode: 'light', // nebūtina, nes 'light' yra numatytoji reikšmė
//   },
// });

function App() {

  return (
    <>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DrawerAppBar />
        <HeroCard />
        <ServiceCards />
        <Video />
        <MyGallery />
        <ContactCard />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
