import React from 'react';
// import PropTypes from 'prop-types';

import BandItem from '../BandItem/BandItem';
import './BandList.css';


class BandList extends React.Component {
  // static propTypes = {
  //   bands = PropTypes.array
  // };

  render(){
    let counter = 0
    const bands = this.props.bands;
    const bandListComponent = bands.map(band => {
      counter++
      return(
        <BandItem
          bandName={band}
          key={counter}
        />
      )
    });
    return(
      <div>
        <ul className="bandList">
          {bandListComponent}
        </ul>
      </div>
    )
  }
}

export default BandList;