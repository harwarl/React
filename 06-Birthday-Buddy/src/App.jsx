import { useState } from 'react';
import data from '../src/data';
import PeopleLists from './List';
import './index.css';

function App() {
  const [people, setPeople] = useState(data);
  const noOfPeople = people.length;
  return (
    <main>
      <section className="container">
        <h3>{noOfPeople} Birthdays Today</h3>
        <PeopleLists people={people} />
        <button type="button" className="btn btn-block" onClick={() => setPeople([])}>
          Clear List
        </button>
      </section>
    </main>
  );
}

export default App;
