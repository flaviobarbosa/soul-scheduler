import {useState} from "react";

import styles from "./styles.module.css";
import EmptySvg from "../../assets/empty.svg";

export const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  if (appointments.length === 0) {
    return (
      <div className={styles.content}>
        <img src={EmptySvg} alt="empty" />
        <h3>Nenhum agendamento encontrado</h3>
      </div>
    );
  }
  return <h1>Appointments</h1>;
};
