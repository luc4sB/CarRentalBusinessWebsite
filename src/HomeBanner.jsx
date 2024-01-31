import Car from "./images/Car.png";
import "./styles/HomeBanner.css";
import FilterBox from "./FilterBox.jsx"

const HomePage = () => {
  return (
    <div className="home-banner">
      <div id="home-banner-text">
        <h2>Plan your trip now</h2>
        <h1 id="Main-title">Car Rental Business</h1>
        
        <p id="banner-text">Explore our fleet and find your perfect ride </p>
      </div>
      
      <img
        src={Car}
        alt="car-img"
        id="background-car"
      />
      
    </div>
    
  )
}

export default HomePage
