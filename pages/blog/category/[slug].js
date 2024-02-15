import { getAllCategories, getAllPostsByCategory } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Posts from 'components/posts'
import Meta from 'components/meta'
import { getPlaiceholder } from 'plaiceholder'
import { getImageBuffer } from 'lib/getImageBuffer'
import { eyecatchLocal } from 'lib/constants'

const Category = ({ name, posts }) => {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle='Blog Category' />
      <Posts posts={posts} />
    </Container>
  )
}

const getStaticPaths = async () => {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false
  }
}

const getStaticProps = async context => {
  const catSlug = context.params.slug
  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)
  const posts = await getAllPostsByCategory(cat.id)

  for (const post of posts) {
    if (!Object.prototype.hasOwnProperty.call(post, 'eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const ImageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(ImageBuffer)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      name: cat.name,
      posts
    }
  }
}

export { getStaticPaths, getStaticProps }
export default Category