import React from "react";

// COMPONENTS
import DailyTasks from "../DailyTasks/DailyTasks.jsx";
import DataModifier from "../DataModifier/DataModifier.jsx";

function Home() {
  return (
    <>
      <DataModifier />
      <DailyTasks />
    </>
  );
}

export default Home;
