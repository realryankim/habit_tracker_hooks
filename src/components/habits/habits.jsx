import React from 'react';
import Habit from '../habit/habit';
import styles from './habits.module.css';

const Habits = ({ habits, onIncrement, onDecrement }) => {
  return (
    <div className={styles.habits}>
      {habits.map(habit => {
        return (
          <Habit
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        );
      })}
    </div>
  );
};

export default Habits;
