import React from 'react'
import FontAwesome from 'react-fontawesome';
import './FilterBar.css';

const FilterBar = () => {
  return (
    <div className="visibilityContainer">
      <FontAwesome name='search' className ="visibilityItem" />
      <span className="visibilityItem">All</span>
      <span className="visibilityItem">Paid</span>
      <span className="visibilityItem">Sent</span>
      <span className="visibilityItem">Overdue</span>
    </div>
  )
}

export default FilterBar