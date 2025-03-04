import { AppProvider } from '@/data/context/AppContext'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { GncProvider } from '@/data/context/GncBancoContext'
import { AuthProvider } from '@/data/context/AuthContext'
import { VhlProvider } from '@/data/context/VhlContext'
import { DashProvider } from '@/data/context/DashboardContext'
import { FilaProvider } from '@/data/context/FilaContext'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <GncProvider>
          <VhlProvider>
            <DashProvider>
              <FilaProvider>
                <Component {...pageProps} />
              </FilaProvider>
            </DashProvider>
          </VhlProvider>
        </GncProvider>
      </AppProvider>
    </AuthProvider>
  )
}
