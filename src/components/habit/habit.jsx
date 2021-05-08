import React from 'react';
import styles from './habit.module.css';

const Habit = ({ habit, onIncrement, onDecrement }) => {
  const { name, count } = habit;

  const handleIncrement = () => {
    onIncrement(habit);
  };

  const handleDecrement = () => {
    onDecrement(habit);
  };

  return (
    <li className={styles.habit}>
      <span className={styles.name}>{name}</span>
      <span className={styles.count}>{count}</span>
      <button onClick={handleIncrement} className={styles.plus}>
        <i className='fas fa-plus-square'></i>
      </button>
      <button onClick={handleDecrement} className={styles.minus}>
        <i className='fas fa-minus-square'></i>
      </button>
      <button className={styles.trash}>
        <i className='fas fa-trash'></i>
      </button>
    </li>
  );
};

export default Habit;
