import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.page}>
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default LandingPage;