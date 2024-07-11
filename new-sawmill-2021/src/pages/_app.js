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
    if (!window.mootrack) {
      !(function (t, n, e, o, a) {
        function d(t) {
          var n = ~~(Date.now() / 3e5),
            o = document.createElement(e)
          ;(o.async = !0), (o.src = t + '?ts=' + n)
          var a = document.getElementsByTagName(e)[0]
          a.parentNode.insertBefore(o, a)
        }
        ;(t.MooTrackerObject = a),
          (t[a] =
            t[a] ||
            function () {
              return t[a].q
                ? void t[a].q.push(arguments)
                : void (t[a].q = [arguments])
            }),
          window.attachEvent
            ? window.attachEvent('onload', d.bind(this, o))
            : window.addEventListener('load', d.bind(this, o), !1)
      })(
        window,
        document,
        'script',
        'https://cdn.stat-track.com/statics/moosend-tracking.min.js',
        'mootrack'
      )
    }
    mootrack('loadForm', '3f572e058d54472e9f5fe3de77f31c33')
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
