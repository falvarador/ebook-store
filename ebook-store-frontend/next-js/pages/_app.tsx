import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { AuthorContext, AuthorProvider } from "../context/author";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <AuthorProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </AuthorProvider>
      
    </>
  );
}
