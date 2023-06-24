import '../styles/globals.css'
import store from '../redux/store';
import { Provider } from 'react-redux';
import {theme} from "../styles/theme";
import {ThemeProvider} from "@mui/material";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
