import "./App.css";
import { Card } from "./components/Card";
import Image1 from "./images/image1.jpg";
import Image2 from "./images/image2.jpg";
import Image3 from "./images/image3.jpg";

function App() {
  return (
    <div>
      <div className="Title">
        <br />
        <h1>OneDrone Highlights</h1>
        <br />
      </div>
      <div className="App">
        <Card
          imgSrc={Image1}
          imgAlt="AerialSurveliance"
          title="Aerial Surveliance"
          description="Elevate your security game with our state-of-the-art aerial surveillance solutions."
        />
        <Card
          imgSrc={Image2}
          imgAlt="BeginnerVideography"
          title="Beginner Videography"
          description="Capture breathtaking shots with ease, perfect 
      for beginner videographers."
        />
        <Card
          imgSrc={Image3}
          imgAlt="InspectionMadeEasy"
          title="Inspection Made Easy"
          description="Effortlessly inspect buildings, structures, and 
      landscapes with our powerful drones"
        />
      </div>
    </div>
  );
}

export default App;
