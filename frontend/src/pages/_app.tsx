import { AppProvider } from '@/data/context/AppContext'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { GncProvider } from '@/data/context/GncBancoContext'
import { AuthProvider } from '@/data/context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <GncProvider>
          <Component {...pageProps} />
        </GncProvider>
      </AppProvider>
    </AuthProvider>
  )
}
