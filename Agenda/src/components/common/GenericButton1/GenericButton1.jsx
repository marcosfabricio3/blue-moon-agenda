import "./GenericButton.css";

function GenericButton1({ id, textButton }) {
  return (
    <>
      <p className="TaskPatientRecord" id={id}>{textButton}</p>
    </>
  );
}

export default GenericButton1;