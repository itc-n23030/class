import Hero from 'components/hero'
import Container from 'components/container'
const Home = () => {
  const props = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }
  return (
    <>
      <Container>
        <Hero {...props} imageOn />
      </Container>
    </>
  )
}

export default Home
