import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { AuthorProvider } from "../context/author";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SnackbarProvider maxSnack={3}>
      <AuthorProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </AuthorProvider>
    </SnackbarProvider>
    
      
    </>
  );
}
