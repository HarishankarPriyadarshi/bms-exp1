import React, { useState } from "react";
import styles from "./home.module.css";
import {Toppanel} from "../../components/topPanel/Toppanel";
import {MiddlePanel} from "../../components/middlePanel/MiddlePanel"
import {ButtonPanel} from "../../components/buttonPanel/ButtonPanel"


export const Home = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [currentSignalIndex, setCurrentSignalIndex] = useState(0);
  
  // Array of biosignal types
  const biosignalTypes = [
    { id: 0, name: "Electrocardiogram(ECG)", code: "ecg" },
    { id: 1, name: "Electroencephalogram(EEG)", code: "eeg" },
    { id: 2, name: "Electromyogram(EMG)", code: "emg" }
  ];
  
  // Function to handle next button click
  const handleNext = () => {
    if (currentSignalIndex < biosignalTypes.length - 1) {
      setCurrentSignalIndex(currentSignalIndex + 1);
    }
  };
  
  // Function to handle previous button click
  const handlePrevious = () => {
    if (currentSignalIndex > 0) {
      setCurrentSignalIndex(currentSignalIndex - 1);
    }
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  // Function to handle clicks outside the instruction panel
  const handleOutsideClick = (e) => {
    if (showInstructions && !e.target.closest(`.${styles["instructionBtn"]}`)) {
      setShowInstructions(false);
    } 
  };

  return (
    <div className={styles["grand-container"]} onClick={handleOutsideClick}>
      <div className={styles["parent-container"]}>
        <div className={styles["top-container"]}>
          <Toppanel />
        </div>
        <div className={styles["button-container"]}>
          <ButtonPanel 
            currentSignal={biosignalTypes[currentSignalIndex]}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirstSignal={currentSignalIndex === 0} 
            isLastSignal={currentSignalIndex === biosignalTypes.length - 1}
          />
        </div>
        <div 
          className={styles["instructionBtn"]} 
          onClick={(e) => {
            e.stopPropagation();
            toggleInstructions();
          }}
        >
          Instructions
        </div>
        <div className={styles["middle-container"]}>
          <div className={styles["middle-panel-container"]}>
            <MiddlePanel 
              showInstructions={showInstructions} 
              currentSignal={biosignalTypes[currentSignalIndex].code} 
            />
          </div>
        </div>
        <div className={styles["bottom-container"]}>
          ©Copyright 2025 Virtual Labs, IIT Roorkee
        </div>
      </div>
    </div>
  );
};
