import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const props = { title: 'Blog', subtitle: 'Recent Posts' }
const Blog = () => (
  <Container>
    <Meta pageTitle='ブログ' />
    <Hero {...props} />
  </Container>
)

export default Blog
