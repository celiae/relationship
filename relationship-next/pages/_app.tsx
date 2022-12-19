import type { AppProps } from "next/app";
import Layout from "components/layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepOrange, cyan, blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: cyan[500],
    },
    warning: {
      main: deepOrange[500],
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
