import React from 'react';
import styles from './habit.module.css';

const Habit = ({ habit, onIncrement, onDecrement, onDelete }) => {
  const { name, count } = habit;

  const handleIncrement = () => {
    onIncrement(habit);
  };

  const handleDecrement = () => {
    onDecrement(habit);
  };

  const handleDelete = () => {
    onDelete(habit);
  };

  return (
    <li className={styles.habit}>
      <span className={styles.name}>{name}</span>
      <span className={styles.habitCount}>{count}</span>
      <button
        onClick={handleIncrement}
        className={`${styles.habitButton} ${styles.habitIncrease}`}
      >
        <i className='fas fa-plus-square'></i>
      </button>
      <button
        onClick={handleDecrement}
        className={`${styles.habitButton} ${styles.habitDecrease}`}
      >
        <i className='fas fa-minus-square'></i>
      </button>
      <button
        onClick={handleDelete}
        className={`${styles.habitButton} ${styles.habitDelete}`}
      >
        <i className='fas fa-trash'></i>
      </button>
    </li>
  );
};

export default Habit;
