import React from 'react';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import IntroScreen from './components/IntroScreen';
import introTabletImg from './assets/home/background-home-tablet.jpg';
import introComputerImg from './assets/home/background-home-desktop.jpg';
import destTabletImg from './assets/destination/background-destination-tablet.jpg';
import destComputerImg from './assets/destination/background-destination-desktop.jpg';
import crewTabletImg from './assets/crew/background-crew-tablet.jpg';
import crewComputerImg from './assets/crew/background-crew-desktop.jpg';
import techTabletImg from './assets/technology/background-technology-tablet.jpg';
import techComputerImg from './assets/technology/background-technology-desktop.jpg';

function App() {

  const [content, setContent] = React.useState(<IntroScreen linkClickHandler={linkClickHandler} />);
  let [backgroundImg, setBackgroundImg] = React.useState(window.matchMedia('(max-width: 768px)').matches ? introTabletImg : introComputerImg);

  React.useEffect(() => {
    let component = content.type.name;
    let componentString = String(component);
    let tablet = window.matchMedia('(max-width: 768px)').matches;
    let computer = window.matchMedia('(min-width: 769px)').matches;

    console.log(tablet);

    if (tablet) {
    switch (tablet) {
      case (componentString.includes('IntroScreen')): 
        setBackgroundImg(introTabletImg);
        return;
      case (componentString.includes('DestinationCard')):
        console.log(`${componentString}, ${tablet}`)
        console.log('set to destTabletImg') 
        setBackgroundImg(destTabletImg);
        return;
      case (componentString.includes('CrewCard')):
        setBackgroundImg(crewTabletImg);
        return;
      case (componentString.includes('TechCard')): 
        setBackgroundImg(techTabletImg);
        return;
    }
  }

  if (computer) {
    switch (computer) {
    case (componentString.includes('IntroScreen')): 
      setBackgroundImg(introComputerImg);
      return;
    case (componentString.includes('DestinationCard')): 
      setBackgroundImg(destComputerImg);
      return;
    case (componentString.includes('CrewCard')): 
      setBackgroundImg(crewComputerImg);
      return;
    case (componentString.includes('TechCard')): 
      setBackgroundImg(techComputerImg);
      return;
    default:
      setBackgroundImg(introComputerImg);
      return;
  }
}

  }, [content])

  function linkClickHandler(element) {
    setContent(element);
  }

  return (
    <div className={styles.App} style={{backgroundImage: "url(" + backgroundImg + ")", backgroundSize: 'cover'}}>
      <NavBar className={styles['App__NavBar']} linkClickHandler={linkClickHandler} />
      {content} 
    </div>
  );
}

export default App;
