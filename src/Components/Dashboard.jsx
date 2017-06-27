import React, { Component } from 'react';
import TopBar from './TopBar.jsx';
import FilterBar from './FilterBar.jsx';

class DashBoard extends Component {
  render () {
    return (
      <div>
        <TopBar />
        <FilterBar />
      </div>
    )
  }
}

export default DashBoard