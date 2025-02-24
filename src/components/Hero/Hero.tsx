import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Professional Tax & Accounting Services
        </h1>
        <p className={styles.subtitle}>
          Expert financial guidance for individuals and businesses in the greater Seattle area
        </p>
        <div className={styles.cta}>
          <a href="#contact" className={styles.primaryButton}>
            Schedule a Consultation
          </a>
          <a href="#services" className={styles.secondaryButton}>
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;