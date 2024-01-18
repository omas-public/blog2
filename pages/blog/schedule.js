import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'

import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'components/two-column'
import ConvertBody from 'components/convert-body'
import Image from 'next/legacy/image'
import { eyecatchLocal } from '@/lib/constants'

const Schedule = ({ title, publish, content, eyecatch, categories }) => (
  <Container>
    <article>
      <PostHeader title={title} subtitle='Blog Article' publish={publish} />
      <figure>
        <Image
          src={eyecatch.url}
          alt=''
          layout='responsive'
          width={eyecatch.width}
          height={eyecatch.height}
          sizes-='(min-width:1152px) 1152px, 100vw'
          priority
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <ConvertBody contentHTML={content} />
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar></TwoColumnSidebar>
      </TwoColumn>
    </article>
  </Container>
)

const getStaticProps = async () => {
  const slug = 'schedule'
  const post = await getPostBySlug(slug)
  // const description = extractText(post.content)
  // const eyecatch = post.eyecatch ?? eyecatchLocal
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
export { getStaticProps }
export default Schedule
