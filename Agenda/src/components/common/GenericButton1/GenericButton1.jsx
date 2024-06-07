import "./GenericButton.css";

function GenericButton1({ id, textButton }) {
  return (
    <>
      <button className="TaskPatientRecord" id={id}>{textButton}</button>
    </>
  );
}

export default GenericButton1;