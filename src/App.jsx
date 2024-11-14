import './App.css'
import DrawerAppBar from './components/Nav'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MultiActionAreaCard from './components/Servises';
import HeroCard from './components/Hero';
import { Video } from './components/video/Video';
import { MyGallery } from './components/Gallery';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

const lightTheme = createTheme({
  palette: {
    mode: 'light', // nebūtina, nes 'light' yra numatytoji reikšmė
  },
});

function App() {

  return (
    <>

      <ThemeProvider theme={lightTheme}>
      <CssBaseline />
        <DrawerAppBar />
        <HeroCard />
        <MultiActionAreaCard />
        <Video />
        <MyGallery />
      </ThemeProvider>
    </>
  )
}

export default App
