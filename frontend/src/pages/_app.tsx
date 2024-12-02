import { AppProvider } from '@/data/context/AppContext'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { GncProvider } from '@/data/context/GncBancoContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GncProvider>
        <Component {...pageProps} />
      </GncProvider>
    </AppProvider>
  )
}
