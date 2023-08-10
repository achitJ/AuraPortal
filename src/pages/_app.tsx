import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import BaseLayout from '@/components/Layouts/Base';
import { Notifications } from '@mantine/notifications';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Anamika Jyotish</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        theme={{
          globalStyles: (theme) => ({
            body: {
              marginTop: 0,
              boxSizing: "border-box",
            },
            a: {
              textDecoration: "none",
            },
            '.container-mt': {
              marginTop: "92px",
            },
            '.selector': {
              userDrag: 'none',
              userSelect: 'none',
              WebkitUserDrag: 'none',
              WebkitUserSelect: 'none',
              MozUserDrag: 'none',
              MozUserSelect: 'none',
            }
          })
        }}  
      >
        <Notifications />
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </MantineProvider>
    </>

  );
}
