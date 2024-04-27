import React from 'react';
import styles from './PasswordStrength.module.css';

function PasswordStrength() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Password Strength Analysis Tool</h1>
      <p>Check the strength of your passwords here.</p>
    </div>
  );
}

export default PasswordStrength;