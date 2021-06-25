import {useState} from "react";

import EmptySvg from "../../assets/empty.svg";

export const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  if (appointments.length === 0) {
    return (
      <>
        <img src={EmptySvg} alt="empty" />
      </>
    );
  }
  return <h1>Appointments</h1>;
};
