const Schedule = ({ title, publish, content, eyecatch, categories }) => (
  <Container>
    <h1>{title}</h1>
  </Container>
)

const getStaticProps = async () => {
  const slug = 'schedule'
  const post = await getPostBySlug(slug)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}
