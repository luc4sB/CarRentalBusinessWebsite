import "./styles/PickYourCar.css";

import Carousel from "./PickCarCarousel.jsx";

const PickYourCar = () => {
    return (
        <section id="pick-your-car-section">
            <div id="pick-car-container">
              <h1>Choose Your Car</h1>
              <div id="Choose-your-car-text"><p>Choose from a variety of rental cars in this category. Whether you are looking for fuel-efficiency, space, or comfort and style you are sure to find the perfect hire car.</p></div>
              <div id="carousel-container">
                  <Carousel/>
              </div>
            </div>
        </section>
    )
}

export default PickYourCar;