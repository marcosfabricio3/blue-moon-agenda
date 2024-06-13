import React from "react";

// COMPONENTS
import DayTask from "../DayTask/DayTask";

function Agenda() {
  return (
    <>
    <DayTask day='Domingo'/>
      <DayTask day='Lunes'/>
      <DayTask day='Martes'/>
      <DayTask day='Miercoles'/>
      <DayTask day='Jueves'/>
      <DayTask day='Sabado'/>
    </>
  );
}

export default Agenda;