import Head from 'next/head'
import { useRouter } from 'next/router'
import { siteMeta } from 'lib/constants'
import siteImg from 'images/ogp.jpg'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta
const Meta = ({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const desc = pageDesc ?? siteDesc
  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`
  const img = pageImg || siteImg.src
  const imgW = pageImgW || siteImg.width
  const imgH = pageImgH || siteImg.height
  const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={desc} />
      <link rel='canonical' href={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={desc} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:type' content={siteType} />
      <meta property='og:locale' content={siteLocale} />
      <link rel='icon' href={siteIcon} />
      <link rel='apple-touch-icon' href={siteIcon} />
      <meta property='og:image' conent={imgUrl} />
      <meta property='og:image:width' conent={imgW} />
      <meta property='og:image:height' conent={imgH} />
      <meta name='twitter:card' content='summary+large_image' />
    </Head>
  )
}

export default Meta
