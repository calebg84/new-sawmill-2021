import '../app/styles/globals.css'
import { useEffect } from 'react'
import Layout from '../app/components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
