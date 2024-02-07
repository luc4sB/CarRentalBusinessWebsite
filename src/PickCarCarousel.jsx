import React, { useState, useEffect } from "react";
import "./styles/Carousel.css";
import CarouselItem from "./CarouselItem";
import HyundaiSUV from "./images/HyundaiSUV.png";
import Car1 from "./images/Car.png";
import Car2 from "./images/Car.png";

const PickCarCarousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [carType, setCarType] = useState(null);

  const items = [
    {
      title: "Car 1 - SUV",
      description:
        "Car 1 - SUV description text",
      image: HyundaiSUV,
      type: "SUV",
    },
    {
      title: "Car 2 - SUV",
      description:
        "Car 2 - SUV description text",
      image: Car2,
      type: "SUV",
    },
    {
      title: "Car 3 - SUV",
      description:
        "Car 3 - SUV description text",
      image: Car1,
      type: "SUV",
    },
    {
      title: "Car 4 - mini",
      description:
        "Car 4 - mini description text",
      image: Car1,
      type: "MINI",
    },
    {
      title: "Car 5 - mini",
      description:
        "Car 5 - mini description text",
      image: Car1,
      type: "MINI",
    },
    {
      title: "Car 6 - mini",
      description:
        "Car 6 - mini description text",
      image: Car1,
      type: "MINI",
    },
    {
      title: "Car 7 - sedan",
      description:
        "Car 7 - sedan description text",
      image: Car1,
      type: "SEDAN",
    },
    {
      title: "Car 8 - sedan",
      description:
        "Car 8 - sedan description text",
      image: Car2,
      type: "SEDAN",
    },
    {
      title: "Car 9 - sedan",
      description:
        "Car 9 - sedan description text",
      image: Car2,
      type: "SEDAN",
    },
  ];

  useEffect(() => {
    const url = new URL(window.location.href);
    const carTypeParam = url.hash.substring(1);
    setCarType(carTypeParam.toUpperCase());
  }, []);

  const filteredItems = items.filter((item) => item.type === carType);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = filteredItems.length - 1; // Loop back to the last car if at the beginning
    } else if (newIndex >= filteredItems.length) {
      newIndex = 0; // Loop back to the first car if at the end
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-item-container" style={{ transform: `translate(-${activeIndex * 100}%)`}}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            return <CarouselItem item={item} width={"100%"} />;
          })
        ) : (
          <p>Sorry we don't have any {carType} cars available for your selected dates</p>
        )}
      </div>

      <div className="carousel-buttons">
        <button className="button-arrow" onClick={() => updateIndex(activeIndex - 1)}>
          <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>

        <div className="indicators">
          {filteredItems.map((item, index) => {
            return (
              <button className="indicator-buttons" onClick={() => updateIndex(index)}>
                <span className={`material-symbols-outlined ${index === activeIndex? "indicator-symbol-active" : "indicator-symbol"}`}>
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>

        <button className="button-arrow" onClick={() => updateIndex(activeIndex + 1)}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default PickCarCarousel;
