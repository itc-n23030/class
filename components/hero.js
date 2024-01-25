import styles from 'styles/hero.module.css'

const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && <figure>[image]</figure>}
    </div>
  )
}

export default Hero
