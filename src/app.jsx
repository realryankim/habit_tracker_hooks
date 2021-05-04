import React, { useState } from 'react';
import Habits from './components/habits/habits';
import Navbar from './components/navbar/navbar';

const App = props => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: 'Reading',
      count: 0,
    },
    {
      id: 2,
      name: 'Reading',
      count: 0,
    },
    {
      id: 3,
      name: 'Reading',
      count: 0,
    },
  ]);

  return (
    <>
      <Navbar />
      <Habits habits={habits} />
    </>
  );
};

export default App;
