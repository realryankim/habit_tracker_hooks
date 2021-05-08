import React from 'react';
import Habit from '../habit/habit';
import HabitAddForm from '../habitAddForm/habitAddForm';
import styles from './habits.module.css';

const Habits = ({ habits, onIncrement, onDecrement, onDelete, onAdd }) => {
  return (
    <div className={styles.habits}>
      <HabitAddForm onAdd={onAdd} />
      {habits.map(habit => {
        return (
          <Habit
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default Habits;
