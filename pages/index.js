import Hero from 'components/hero'
const props = {
  title: 'CUBE',
  subtitle: 'アウトプットしていくサイト',
  imageOn: true
}
const Home = () => {
  return (
    <>
      <Hero {...props} />
    </>
  )
}

export default Home
