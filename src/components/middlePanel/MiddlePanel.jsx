import React, { useEffect, useRef } from "react";
import { Instruction } from "../../components/instructionPanle/Instruction";
import styles from "./middlePanel.module.css";
import { Ecg } from "../../components/content/ecg/Ecg";
import { Eeg } from "../../components/content/eeg/Eeg";
import { Emg } from "../../components/content/emg/Emg";


export const MiddlePanel = ({ showInstructions, currentSignal }) => {
  const instructionRef = useRef(null);

  // Add animation class when instruction panel appears or disappears
  useEffect(() => {
    if (instructionRef.current) {
      if (showInstructions) {
        instructionRef.current.classList.add(styles.fadeIn);
        instructionRef.current.classList.remove(styles.fadeOut);
      } else {
        instructionRef.current.classList.add(styles.fadeOut);
        instructionRef.current.classList.remove(styles.fadeIn);
      }
    }
  }, [showInstructions]);

  return (
    <div className={styles.middlePanelWrapper}>
            {/* Instruction panel with conditional rendering */}
      {showInstructions && (
        <div className={styles.instructionPanel} ref={instructionRef}>
          <Instruction />
        </div>
      )}
      {/* Main content area */}
      <div className={styles.contentArea}>
        {currentSignal === 'ecg' && <Ecg />}
        {currentSignal === 'eeg' && <Eeg />}
        {currentSignal === 'emg' && <Emg />}
      </div>
    
    </div>
  );
};
