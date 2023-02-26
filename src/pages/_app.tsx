import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import tema from '../ui/Themes/theme';
import Header from '../ui/components/header/header';


export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={tema}>
    <Header/>
    <Component {...pageProps} />
  </ThemeProvider>
  );
}

