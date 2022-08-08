import styles from './App.module.css';
import NavBar from './components/NavBar';
import IntroScreen from './components/IntroScreen';

function App() {
  return (
    <div className="App">
      <NavBar className={styles['App__NavBar']} />
      <IntroScreen></IntroScreen>
    </div>
  );
}

export default App;
