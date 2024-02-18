import { ToastContainer, toast } from 'react-toastify';
import Form from './Form';
import { useState } from 'react';
import Items from './Items';
import { nanoid } from 'nanoid';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(list);
  } else {
    list = [];
  }
  return list;
};

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    const items = getLocalStorage();
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added successfully');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item deleted successfully');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} editItem={editItem} removeItem={removeItem} />
      <ToastContainer position="top-center" />
    </section>
  );
}

export default App;
