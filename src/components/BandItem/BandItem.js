import React from 'react';
// import PropTypes from 'prop-types';

import './BandItem.css';

class BandItem extends React.Component{
  render(){
    const bandName = this.props.bandName;

    return(
      <div>
        <li className="bandItem">{bandName}</li>
      </div>
    )
  }
}

export default BandItem;