import React from "react";
import styles from "./Instruction.module.css";

export const Instruction = () => {
  return (
    <div>
      <div className={styles.instructions} id="instTab">
        <div >
          <p className={styles.insHeading}>Instructions</p>
          <ul className={styles.steps}>
            <li>
              <p>
                <b>Step 1:</b>
              </p>
              <p className={styles.stepText}>
                The aim of this experiment is to get familiarized with the
                biomdecal signals.

              </p>
            </li>
            <li>
              <p>
                <b>Step 2:</b>
              </p>
              <p className={styles.stepText}>
                Click on <span>Next</span> Button to view the next biomdecal signal.

              </p>
            </li>
            <li>
              <p>
                <b>Step 3:</b>
              </p>
              <p className={styles.stepText}>
                Click on <span>Previous</span> button to go back to previous biomdecal signal.

              </p>
            </li>
            <li>
              <p>
                <b>Step 4:</b>
              </p>
              <p className={styles.stepText}>
                Repeat <span>Step 2</span> and <span>Step 3</span> until you reach the end of the experiment.

              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
