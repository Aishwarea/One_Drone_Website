import './App.css';
import { Card } from "./components/Card"

function App() {
  return (
    <div className='App'>
      <Card  
      imgSrc='https://drive.google.com/file/d/1xN0RCxU-BcErW7PlMWiNtvC6K8w8sS_6/view?usp=sharing'
      imgAlt='AerialSurveliance'
      title='Aerial Surveliance'
      description='Elevate your security game with our state-of-the-art aerial surveillance solutions.'
      />
      <Card  
      imgSrc='https://drive.google.com/file/d/1pJKyoiImGDzPQx53YB6-2V7LaoJu8mbW/view?usp=drive_link'
      imgAlt='BeginnerVideography'
      title='Beginner Videography'
      description='Capture breathtaking shots with ease, perfect 
      for beginner videographers.'
      />
      <Card  
      imgSrc='https://drive.google.com/file/d/1pJKyoiImGDzPQx53YB6-2V7LaoJu8mbW/view?usp=sharing'
      imgAlt='InspectionMadeEasy'
      title='Inspection Made Easy'
      description='Effortlessly inspect buildings, structures, and 
      landscapes with our powerful drones'
      />
    </div>
  );
}

export default App;