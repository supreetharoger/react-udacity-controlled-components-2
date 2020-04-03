import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.
*/
const ItemsList = props => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item">{props.items.map((item, index) => <Item key={index} item={item} />)}</ol>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemsList;

