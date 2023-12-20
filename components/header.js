import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

const Header = () => (
  <header>
    <Container largs>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </Container>
  </header>
)

export default Header
