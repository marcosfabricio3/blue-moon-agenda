import React, { useRef} from "react";

// COMPONENTS
import InputForm from "../../common/InputForm/InputForm";

// CSS
import "./FormAdd.css";

function FormAdd() {
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // GET FORM DATA
      var formData = event.target.elements;
      var nombre = formData.nombre.value;
      var celular = formData.celular.value;
      var en_tratamiento = formData.en_tratamiento.value;
      var reserva = formData.reserva.value;
    //

    // MAKE THE POST REQUEST TO THE API
      try {
        const response = await fetch("http://localhost:3000/fichas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nombre,
            celular: celular,
            en_tratamiento: en_tratamiento,
            reserva: reserva,
          }),
        });
        if (response.ok) {
          console.log("Ficha guardada con éxito");
          // Puedes realizar acciones adicionales después de guardar la ficha
          formRef.current.reset();
        } else {
          console.error("Error al guardar la ficha");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    //

  };

  return (
    <>
      {/* FORMULARIO */}
      <form ref={formRef} className="FormAdd" onSubmit={handleSubmit}>

        <p className="TitleFormAdd">Nueva hora</p>

        <div className="ContainerData">
          <InputForm TextInput={"Nombre"} name={"nombre"} />
          <InputForm TextInput={"Celular"} name={"celular"} />
          <InputForm TextInput={"En Tratamiento"} name={"en_tratamiento"} />
          <InputForm TextInput={"Reserva"} name={"reserva"} />
        </div>

        <div className="AntationAndButtonContainer">
          <textarea className="AnotationFormAdd" name="anotacion" id=""></textarea>

          <button type="submit" className="ButtonAdd">GUARDAR</button>
        </div>

      </form>
    </>
  );
}

export default FormAdd;
