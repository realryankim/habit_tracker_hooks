import React from 'react';
import Habit from '../habit/habit';
import HabitAddForm from '../habitAddForm/habitAddForm';
import styles from './habits.module.css';

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <div className={styles.habits}>
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map(habit => {
          return (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
      <button onClick={onReset} className={styles.habitReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
