import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import store from "app/store";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",

          shadows: {
            md: "1px 1px 3px rgba(0, 0, 0, .25)",
            xl: "5px 5px 3px rgba(0, 0, 0, .25)",
          },

          headings: {
            fontFamily: "Roboto, sans-serif",
            sizes: {
              h1: { fontSize: 30 },
            },
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </Provider>
  );
}

export default MyApp;
