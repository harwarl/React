import React from 'react';
import SingleItem from './SingleItem';

const Items = ({ items, editItem, removeItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} editItem={editItem} removeItem={removeItem} />;
      })}
    </div>
  );
};

export default Items;
