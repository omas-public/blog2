import Head from 'next/head'

const Meta = ({ pageTitle }) => (
  <Head>
    <title>{pageTitle}</title>
    <meta propeaty='og:title' content={pageTitle} />
  </Head>
)

export default Meta
