import React, { useState } from "react";
import "./App.css"; // Import your CSS file
import autoCompact from "./images/compactCar.jpg";
import manualSUV from "./images/suvCar.jpg";

const carData = [
  {
    id: 1,
    model: "Car Model 1",
    transmission: "Manual",
    year: 2022,
    size: "Compact",
    image: autoCompact,
  },
  {
    id: 2,
    model: "Car Model 2",
    transmission: "Automatic",
    year: 2023,
    size: "SUV",
    image: manualSUV,
  },
  // Add more car data as needed
];

const Homepage = () => {
  const [filters, setFilters] = useState({
    transmission: "",
    year: "",
    size: "",
  });

  const filteredCars = carData.filter((car) => {
    return (
      (filters.transmission === "" ||
        car.transmission === filters.transmission) &&
      (filters.year === "" || car.year.toString() === filters.year) &&
      (filters.size === "" || car.size === filters.size)
    );
  });

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  return (
    <div className="homepage">
      <header>
        <div className="logo">
          <h1>Car Rental Business</h1>
        </div>
        <p>Explore our fleet and find your perfect ride.</p>
      </header>
      <main>
        <div className="filters">
          <label>
            Transmission:
            <select
              onChange={(e) =>
                handleFilterChange("transmission", e.target.value)
              }
            >
              <option value="">Any</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </label>
          <label>
            Year:
            <select
              onChange={(e) => handleFilterChange("year", e.target.value)}
            >
              <option value="">Any</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              {/* Add more years as needed */}
            </select>
          </label>
          <label>
            Size:
            <select
              onChange={(e) => handleFilterChange("size", e.target.value)}
            >
              <option value="">Any</option>
              <option value="Compact">Compact</option>
              <option value="SUV">SUV</option>
              {/* Add more sizes as needed */}
            </select>
          </label>
        </div>
        <section className="car-options">
          {filteredCars.map((car) => (
            <div className="car-card" key={car.id}>
              <img src={car.image} alt={car.model} style={{ maxWidth: '300px', maxHeight: '200px' }}/>
              <h2>{car.model}</h2>
              <p>
                {car.transmission} | Year: {car.year} | Size: {car.size}
              </p>
            </div>
          ))}
        </section>
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Car Rental Business. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
