import React from 'react';
import styles from './ToolCard.module.css'; // Make sure the path is correct

const ToolCard = ({ icon, title, text }) => {
  return (
    <div className={styles.toolCard}>
      <img src={icon} alt={`${title}`} className={styles.toolIcon} />
      <h3 className={styles.toolTitle}>{title}</h3>
      <p className={styles.toolDescription}>{text}</p>
    </div>
  );
};

export default ToolCard;