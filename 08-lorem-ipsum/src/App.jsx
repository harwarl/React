import { useState } from 'react';
import data from './data';
import nanoid from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  //import the data
  const [text, setText] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount)); //function for the data will be in here
  }

  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={nanoid.nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default App;
