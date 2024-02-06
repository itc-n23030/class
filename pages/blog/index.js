import { getAllPosts } from 'lib/api'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import Posts from 'components/posts'

const Blog = ({ posts }) => {
  const props = { title: 'Blog', subtitle: 'Recent Posts' }
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero {...props} />
      <Posts posts={posts} />
    </Container>
  )
}

const getStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: {
      posts
    }
  }
}

export default Blog
export { getStaticProps }
