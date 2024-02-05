import "./styles/PickYourCar.css";

import Carousel from "./PickCarCarousel.jsx";

const PickYourCar = () => {
    return (
        <section id="pick-your-car-section">
            <div id="pick-car-container">
              <h1>Choose Your Car</h1>
              <div id="carousel-container">
                  <Carousel/>
              </div>
            </div>
        </section>
    )
}

export default PickYourCar;