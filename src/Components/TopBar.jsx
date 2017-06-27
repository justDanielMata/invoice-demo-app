import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import './TopBar.css';

class TopBar extends Component {
  render () {
    return (
      <div className="navContainer">
        <div className="leftNav">
          <p style={{color: '#764ae7', fontWeight: 'bold', fontSize: 'big'}}>Invoicr</p>
          <p className="item"> My invoices </p>
          <p className="item">Customers</p>
        </div>
        <div className="rightNav">
          <FontAwesome name="bell" size="1x" style={{color: '#764ae7', marginRight: "4em"}}/>
          <img className="avatar" src="https://www.fillmurray.com/50/50" alt="avatar" />
        </div>
      </div>
    )
  }
}

export default TopBar