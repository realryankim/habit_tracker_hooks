import React, { useState } from 'react';
import Habits from './components/habits/habits';
import Navbar from './components/navbar/navbar';
import styles from './app.module.css';

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

  const handleIncrement = habit => {
    const newHabits = habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(newHabits);
  };

  const handleDecrement = habit => {
    const newHabits = habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    setHabits(newHabits);
  };

  const handleDelete = habit => {
    const newHabits = habits.filter(item => item.id !== habit.id);

    setHabits(newHabits);
  };

  const handleAdd = name => {
    const newHabits = [
      ...habits,
      {
        id: new Date(),
        name,
        count: 0,
      },
    ];

    setHabits(newHabits);
  };

  return (
    <>
      <Navbar />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </>
  );
};

export default App;
