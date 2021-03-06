import { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
