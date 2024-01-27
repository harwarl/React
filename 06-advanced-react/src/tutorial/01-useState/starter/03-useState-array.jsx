import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  function removeItem(id) {
    const newPeopleList = people.filter((object) => object.id !== id);
    setPeople(newPeopleList);
  }

  return (
    <div>
      {people.map((item) => {
        const { id, name } = item;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              className="btn"
              onClick={() => {
                removeItem(id);
              }}
            >
              Remove Item
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        Clear List
      </button>
    </div>
  );
};

export default UseStateArray;
