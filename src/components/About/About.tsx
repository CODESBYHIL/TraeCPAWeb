import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Our Firm</h2>
          <p className={styles.subtitle}>
            Providing expert tax and accounting services to individuals and businesses in the greater Seattle area for over 15 years.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src="/images/office.jpg"
              alt="Our office"
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h3>Professional Expertise You Can Trust</h3>
            <p>
              At Trae CPA, we understand that every client has unique financial needs. Our team of experienced professionals is dedicated to providing personalized solutions that help you achieve your financial goals.
            </p>
            <p>
              With extensive experience in tax planning, accounting, and business advisory services, we work closely with individuals and businesses to ensure compliance while maximizing financial opportunities.
            </p>
          </div>
        </div>

        <div className={styles.values}>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h4>Expertise</h4>
              <p>Our team brings years of experience and continuous professional education to serve you better.</p>
            </div>
            <div className={styles.valueCard}>
              <h4>Integrity</h4>
              <p>We maintain the highest ethical standards and always act in our clients' best interests.</p>
            </div>
            <div className={styles.valueCard}>
              <h4>Dedication</h4>
              <p>We are committed to providing exceptional service and building long-lasting relationships with our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;