import Logo from 'components/logo'
import styles from 'styles/footer.module.css'
import Container from 'components/container'

const Footer = () => {
  return (
    <Container>
      <footer className={styles.wrapper}>
        <div className={styles.flexContainer}>
          <Logo />
          [social]
        </div>
      </footer>
    </Container>
  )
}

export default Footer
