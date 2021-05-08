import React, { useRef } from 'react';
import styles from './habitAddForm.module.css';

const HabitAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && onAdd(name);

    formRef.current.reset();
  };

  return (
    <form className={styles.addForm} ref={formRef} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className={styles.addInput}
        type='text'
        placeholder='Habit'
      />
      <button className={styles.addButton}>Add</button>
    </form>
  );
};

export default HabitAddForm;
