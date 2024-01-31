import Head from 'components/header'

const Meta = ({ pagetitle }) => {
  return (
    <Head>
      <title>{pagetitle}</title>
      <meta property='og:title' content={pagetitle} />
    </Head>
  )
}

export default Meta
