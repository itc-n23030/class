import Hero from 'components/hero'
import Container from 'components/container'

const Blog = () => {
  const props = { title: 'Blog', subtitle: 'Recent Posts' }
  return (
    <Container>
      <Hero {...props} />
    </Container>
  )
}

export default Blog
