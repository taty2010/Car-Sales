import React from 'react';

const AdditionalFeature = props => {
  // console.log('AdditionalFeature props', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" value={props.id} onClick={props.buyItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
