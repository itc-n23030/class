import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getAllPosts } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getImageBuffer } from 'lib/getImageBuffer'
import { getPlaiceholder } from 'plaiceholder'

const Home = ({ posts }) => {
  const props = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }
  return (
    <>
      <Container>
        <Meta />
        <Hero {...props} imageOn />
        <Posts posts={posts} />
        <Pagination nextUrl='/blog' nextText='More Posts' />
      </Container>
    </>
  )
}

const getStaticProps = async () => {
  const posts = await getAllPosts(4)
  for (const post of posts) {
    if (!Object.prototype.hasOwnProperty.call(post, 'eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = getImageBuffer(post.eyecatch.url)
    const { base64 } = getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: posts
  }
}

export { getStaticProps }
export default Home
