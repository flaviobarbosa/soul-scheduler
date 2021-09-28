import React from "react";
import {Button} from "../../components/Button/Button";

import styles from "./styles.module.css";

const TIMES_ALLOWED = [5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20];

export const Schedule = () => {
  return (
    <div className={styles.content}>
      <h3>Agendamento</h3>
      <div className={styles.buttonWrapper}>
        {TIMES_ALLOWED.map((time, index) => (
          <Button width="100%" disabled={index % 3 === 0}>
            {time}:00
          </Button>
        ))}
      </div>
    </div>
  );
};
