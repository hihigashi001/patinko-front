import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 300000,
    },
  },
});

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>-patinko-</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <props.Component {...props.pageProps} />
      </QueryClientProvider>
    </>
  );
};

export default App;
