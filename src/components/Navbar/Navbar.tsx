import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.companyName}>Trae CPA</span>
        </Link>

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
          <Link to="/services" className={styles.menuLink}>Services</Link>
          <Link to="/about" className={styles.menuLink}>About</Link>
          <Link to="/contact" className={styles.menuLink}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;