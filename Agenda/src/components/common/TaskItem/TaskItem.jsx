// COMPONENTES
import GenericButton1 from "../GenericButton1/GenericButton1";

// CSS
import "./TaskItem.css";

function TaskItem({ id, name, fecha }) {
  return (
    <>
      <div className="TaskItem">

        <div className="TaskBasicInfo">
          <p className="TaskHour">{fecha}</p>
          <p className="TaskPatient">{name}</p>
        </div>

        <GenericButton1 id={id} textButton={"FICHA"} />

      </div>
    </>
  );
}

export default TaskItem;