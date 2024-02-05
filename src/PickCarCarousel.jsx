import React, { useState } from "react";
import "./styles/Carousel.css";
import CarouselItem from "./CarouselItem";
import Car1 from "./images/Car.png";
import Car2 from "./images/Car.png";

const PickCarCarousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  
  const items = [
    {
      title: "Car 1",
      description:
        "Car 1 description text",
      image: Car1,
    },
    {
      title: "Car 2",
      description:
        "Car 2 description text",
      image: Car2,
    },
    {
      title: "Car 3",
      description:
        "Car 3 description text",
      image: Car2,
    },
  ]
  
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
    console.log(newIndex);
  };

  
  return (
    
    <div class="carousel-container">
      <div
        className="carousel-item-container"
        style={{ transform: `translate(-${activeIndex * 100}%)`}}
      >
        
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
        
      </div>
      
      <div className="carousel-buttons">
        
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex? "indicator-symbol-active" : "indicator-symbol"}`}>
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      
    </div>
    
    
  )
}

export default PickCarCarousel;
