import styles from './App.module.css';
import NavBar from './components/NavBar';
import IntroScreen from './components/IntroScreen';
import DestinationCard from './components/DestinationCard';

function App() {
  return (
    <div className="App">
      <NavBar className={styles['App__NavBar']} />
      {/* <IntroScreen></IntroScreen> */}
      <DestinationCard />
    </div>
  );
}

export default App;
