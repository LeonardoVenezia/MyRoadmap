import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      messages={pageProps.messages}
      now={new Date(pageProps.now)}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}

export default MyApp
