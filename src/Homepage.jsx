import React, { useState } from "react";
import "./styles/App.css";
import FilterModal from "./modal.jsx"
import autoCompact from "./images/compactCar.jpg";
import manualSUV from "./images/suvCar.jpg";
import Login from "./login.jsx";
import HomeBanner from "./HomeBanner.jsx";
import FilterBox from "./FilterBox.jsx"
import About from "./About.jsx"
import PickYourCar from "./PickYourCar.jsx"

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
    startYear: "",
    endYear: "",
    size: "",
  });


  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  const applyFilters = () => {
    // Perform any additional actions needed when filters are applied
    // For now, just toggle the filter modal visibility
    toggleFilterModal();
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  const filteredCars = carData.filter((car) => {
    const carYear = car.year.toString();
    const startYear = filters.startYear === "" ? "" : filters.startYear.toString();
    const endYear = filters.endYear === "" ? "" : filters.endYear.toString();

    return (


      (filters.transmission === "" || car.transmission === filters.transmission) &&
      ((startYear === "" && endYear === "") || (carYear >= startYear && carYear <= endYear)) &&
      (filters.size === "" || car.size === filters.size)
    );
  });

  return (
    <div className="homepage">
      
      <HomeBanner/>
      <FilterBox/>
      <About/>

      <main>

        <button id="Filter-button" onClick={toggleFilterModal} className="filter-toggle-button">
          Show Filters
        </button>
        <FilterModal
          isVisible={isFilterModalVisible}
          onClose={toggleFilterModal}
          onApply={applyFilters}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <section className="car-options">
          {filteredCars.map((car) => (
            <div className="car-card" key={car.id}>
              <img
                src={car.image}
                alt={car.model}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
              <h2>{car.model}</h2>
              <p>
                {car.transmission} | Year: {car.year} | Size: {car.size}
              </p>
            </div>
          ))}
        </section>

      </main>
      <footer>
        

      </footer>
    </div>

  );
};

export default Homepage
