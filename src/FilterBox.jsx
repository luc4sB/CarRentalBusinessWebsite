import "./styles/FilterBox.css"
import { Outlet, Link } from "react-router-dom";

const FilterBox = () => {
  
  const carTypeOptions = [
    "SUV", "Mini", "Sedan", "Sports", "Luxury", "Electric", "Hybrid", "Convertible"]

  const Locations = [
    "London", "Birmingham", "Lemington Spa"
  ]


  
      
  return (
    <section id="filter-box-section">
      <div id="FilterBox">
        <h2>Rent a car</h2>
        <hr id="rent-a-car-divider"></hr>
        
        <div id="FilterBox-inputs">
          
          
            
            <div id="car-type" className="input-box"><p>Car Type*</p><select name="car-type" className="InputAndSelect" id="car-type-select">
              <option value="" selected="selected">Select Car Type</option>
              {carTypeOptions.map((carType) => <option>{carType}</option>)}
            </select></div>
            
            <div id="pickup-location" className="input-box"><p>Pickup Location*</p><select className="InputAndSelect" name="subject" id="subject">
              <option value="" selected="selected">Select Location</option>
              {Locations.map((location) => <option>{location}</option>)}
            </select></div>
            
          
          
          
            
            <div id="pickup-date" className="input-box"><p>Pickup Date*</p>  <input type="date" id="birthday" name="birthday" className="InputAndSelect"/></div>
            <div id="dropoff-date" className="input-box"><p>Dropoff Date*</p>  <input type="date" className="InputAndSelect" id="birthday" name="birthday"/></div>
            
          
    
          
  
            <div id="dropoff-location" className="input-box"><p>Dropoff Location*</p><select name="subject" id="subject" className="InputAndSelect">
              <option value="" selected="selected">Select Location</option>
              {Locations.map((location) => <option>{location}</option>)}
            </select></div>
            <div id="search-button" className="input-box">
              <Link to="./choosecar">
                <button >Search</button>
              </Link>
            </div>
          
          
          
        </div>
      </div>
    </section>
  )
}


export default FilterBox