import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <span className={styles.companyName}>Kehl CPA</span>
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={styles.menuIcon}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div className={`${styles.menuItems} ${isMenuOpen ? styles.isOpen : ''}`}>
          <a href="#services" className={styles.menuLink}>Services</a>
          <a href="#about" className={styles.menuLink}>About</a>
          <a href="#contact" className={styles.menuLink}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;