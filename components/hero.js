import styles from 'styles/hero.module.css'
import Image from 'next/legacy/image'
import cube from 'images/cube.jpg'

const Hero = ({ title, subtitle, imageOn = false }) => (
  <div className={styles.flexContainer}>
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
    {imageOn && (
      <figure className={styles.image}>
        <Image
          src={cube}
          layout='responsive'
          alt=''
          sizes='(min-width: 1152px) 1152px, (min-width:768px) 50vw, 100vw'
          placeholder='blur'
          priority
        />
      </figure>
    )}
  </div>
)

export default Hero
