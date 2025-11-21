import React from "react";
import styles from "./buttonPanel.module.css";

export const ButtonPanel = ({ currentSignal, onNext, onPrevious, isFirstSignal, isLastSignal }) => {
  return (
    <div className={styles["button-panel-container"]}>
      <div>
        <button 
          className={styles.previous} 
          onClick={onPrevious} 
          disabled={isFirstSignal}
        >
          Previous
        </button>
      </div>
      <div>
        <h3 className={styles["button-panel-title"]}>{currentSignal.name}</h3>
      </div>
      <div>
        <button 
          className={styles.next} 
          onClick={onNext} 
          disabled={isLastSignal}
        >
          Next
        </button>
      </div>
    </div>
  );
};
