import "./styles/FilterBox.css"

const FilterBox = () => {
  const carTypeOptions = [
    "VW golf 6", "Toyota Corolla", "Audi A3", "BMW 3", "Mercedes A-Class"]

  const Locations = [
    "London", "Birmingham", "Lemington Spa"
  ]


  
      
  return (
    <div id="FilterBox">
      <h2>Rent a car</h2>
      <hr id="rent-a-car-divider"></hr>
      
      <div id="FilterBox-inputs">
        
        <div id="col1">
          
          <div id="car-type"><p>Car Type*</p><select name="car-type" id="car-type-select">
            <option value="" selected="selected">Select Car Type</option>
            {carTypeOptions.map((carType) => <option>{carType}</option>)}
          </select></div>
          
          <div id="pickup-location"><p>Pickup Location*</p><select name="subject" id="subject">
            <option value="" selected="selected">Select Location</option>
            {Locations.map((location) => <option>{location}</option>)}
          </select></div>
          
        </div>
        
        <div id="col2">
          
          <div id="pickup-date"><p>Pickup Date*</p>  <input type="date" id="birthday" name="birthday"/></div>
          <div id="dropoff-date"><p>Dropoff Date*</p>  <input type="date" id="birthday" name="birthday"/></div>
          
        </div>
  
        <div id="col3">

          <div id="dropoff-location"><p>Dropoff Location*</p><select name="subject" id="subject">
            <option value="" selected="selected">Select Location</option>
            {Locations.map((location) => <option>{location}</option>)}
          </select></div>
          <div id="search-button"><button>Search</button></div>
        </div>
        
      </div>
    </div>
  )
}

export default FilterBox