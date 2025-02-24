import styles from './Services.module.css';

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>Tax Services</h3>
            <ul>
              <li>Individual Tax Return Preparation</li>
              <li>Business Tax Return Preparation</li>
              <li>Tax Planning and Consulting</li>
              <li>IRS Problem Resolution</li>
              <li>Estate and Trust Tax Returns</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3>Business Services</h3>
            <ul>
              <li>Business Formation</li>
              <li>Bookkeeping and Accounting</li>
              <li>Financial Statement Preparation</li>
              <li>Payroll Services</li>
              <li>Business Advisory Services</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3>Specialized Services</h3>
            <ul>
              <li>QuickBooks Setup and Training</li>
              <li>Retirement Planning</li>
              <li>Estate Planning</li>
              <li>Business Succession Planning</li>
              <li>Financial Planning</li>
            </ul>
          </div>
        </div>

        <div className={styles.consultation}>
          <h3>Need Professional Tax or Accounting Help?</h3>
          <p>Contact us today to schedule a consultation and learn how we can assist you with your financial needs.</p>
          <a href="#contact" className={styles.consultButton}>Schedule a Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Services;