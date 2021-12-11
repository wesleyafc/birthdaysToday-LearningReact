import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {

  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>

        {/** get legth from list of people*/}
        <h3>{people.length}birthdays today</h3>

        {/**call component List and set his values */}
        <List people={people} />

        {/**set empty list*/}
        <button onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  )

}

export default App;
