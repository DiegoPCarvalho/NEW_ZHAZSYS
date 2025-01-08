import { AppProvider } from '@/data/context/AppContext'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { GncProvider } from '@/data/context/GncBancoContext'
import { AuthProvider } from '@/data/context/AuthContext'
import { VhlProvider } from '@/data/context/VhlContext'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <GncProvider>
          <VhlProvider>
            <Component {...pageProps} />
          </VhlProvider>
        </GncProvider>
      </AppProvider>
    </AuthProvider>
  )
}
