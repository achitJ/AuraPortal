import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import BaseLayout from '@/components/Layouts/Base';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from '@/utils/stores/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        globalStyles: (theme) => ({
          body: {
            marginTop: 0,
            boxSizing: "border-box",
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
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </MantineProvider>
  );
}
