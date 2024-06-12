import InputForm from "../../common/InputForm/InputForm";
import GenericButton1 from "../../common/GenericButton1/GenericButton1";

// CSS
import './EditForm.css';


function EditForm() {

  return(
    <>
      <div className="EditFormContainer">
        <div className="PatientSelector">
          <div className="InputEditSearch">

            <InputForm TextInput={"Nombre del paciente"} name={'patientSelector'}/>

          </div>
          <div className="ButtonEditSearch">

            <GenericButton1 textButton={'Buscar'} id={'patientSelector'}/>

          </div>
        </div>
      </div>
    </>
  )
};

export default EditForm;