import '@/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from 'components/layout'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoCss = false

export default function App ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
