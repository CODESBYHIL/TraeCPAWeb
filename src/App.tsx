import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.root}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
