import '../styles/globals.css'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

const myTheme = {
  palette: {
    accents_4: '#1c251f',
    accents_5: '#648381',
    accents_6: '#71927b',
    accents_7: '#9ac8a8',
    selection: '#055300',
    success: '#14b872',
    successLight: '#0ade3e',
    successDark: '#0eaa67',
  },
}

const App = ({ Component, pageProps }) => {
  return (
    <GeistProvider theme={myTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  )
}

export default App
