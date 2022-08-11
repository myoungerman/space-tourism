import styles from './App.module.css';
import NavBar from './components/NavBar';
import IntroScreen from './components/IntroScreen';
import DestinationCard from './components/DestinationCard';
import CrewCard from './components/CrewCard';
import TechCard from './components/TechCard';

function App() {
  return (
    <div className={styles.App}>
      <NavBar className={styles['App__NavBar']} />
      {/* <IntroScreen></IntroScreen> */}
      <DestinationCard className={styles['App__cards']} />
      {/* <CrewCard className={styles['App__cards']} /> */}
      {/* <TechCard className={styles['App__cards']} /> */}
    </div>
  );
}

export default App;
