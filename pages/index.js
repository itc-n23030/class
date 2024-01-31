import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
const Home = () => {
  const props = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }
  return (
    <>
      <Container>
        <Meta />
        <Hero {...props} imageOn />
      </Container>
    </>
  )
}

export default Home
