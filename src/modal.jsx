import React from "react";
import "./styles/modal.css"


const FilterModal = ({ isVisible, onClose, onApply, filters, onFilterChange }) => {
  return (
    isVisible && (
      <div className="filter-modal">
        <div className="filter-modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <label>
            Transmission:
            <select onChange={(e) => onFilterChange("transmission", e.target.value)}>
              <option value="">Any</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </label>
          <label>
            Year Range:
            <div>
              <input
                type="text"
                placeholder="Start Year"
                value={filters.startYear}
                onChange={(e) => onFilterChange("startYear", e.target.value)}
              />
              <span> to </span>
              <input
                type="text"
                placeholder="End Year"
                value={filters.endYear}
                onChange={(e) => onFilterChange("endYear", e.target.value)}
              />
            </div>
          </label>
          <label>
            Size:
            <select onChange={(e) => onFilterChange("size", e.target.value)}>
              <option value="">Any</option>
              <option value="Compact">Compact</option>
              <option value="SUV">SUV</option>
            </select>
          </label>
          <button onClick={onApply} className="apply-filter-button">
            Apply Filters
          </button>
        </div>
      </div>
    )
  );
};

export default FilterModal;