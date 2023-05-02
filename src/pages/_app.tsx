import { wrapper } from '@/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'
function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const store: any = useStore()
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  )
}

export default wrapper.withRedux(App)
