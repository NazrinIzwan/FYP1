
import React from 'react';
import styles from './PasswordGenerator.module.css';

function PasswordGenerator() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Password Generator Tool</h1>
      <p>Customize your passwords here.</p>
    </div>
  );
}

export default PasswordGenerator;