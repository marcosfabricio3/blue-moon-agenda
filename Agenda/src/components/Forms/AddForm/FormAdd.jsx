import './FormAdd.css'
import InputForm from '../../common/InputForm/InputForm';

function FormAdd() {

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Obtener los datos del formulario
        const formData = event.target.elements;
        const nombre = formData.nombre.value;
        const tratamiento = formData.tratamiento.value;
        const telefono = formData.telefono.value;
        const fecha = formData.fecha.value;
        const precio = formData.precio.value;
    
        // Realizar la solicitud POST a la API
        try {
          const response = await fetch('http://localhost:3000/fichas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: nombre,
              tratamiento_actual: tratamiento,
              celular: telefono,
              fecha,
              precio_acordado: precio,
              en_tratamiento: true, // Puedes establecer el valor según tu lógica
              reserva: true, // Puedes establecer el valor según tu lógica
            }),
          });
          if (response.ok) {
            console.log('Ficha guardada con éxito');
            // Puedes realizar acciones adicionales después de guardar la ficha
          } else {
            console.error('Error al guardar la ficha');
          }
        } catch (error) {
          console.error('Error al realizar la solicitud:', error);
        }
      };  

    return(
        <>
            <form className='FormAdd' onSubmit={handleSubmit}>

                <p className='TitleFormAdd'>Nueva hora</p>

                <div className='ContainerData'>

                    <InputForm TextInput={"Nombre"} name={"nombre"}/>
                    <InputForm TextInput={"Tratamiento"} name={"tratamiento"}/>
                    <InputForm TextInput={"Telefono"} name={"telefono"}/>
                    <InputForm TextInput={"Fecha"} name={"fecha"}/>
                    <InputForm TextInput={"Precio"} name={"precio"}/>

                </div>

                <div className='AntationAndButtonContainer'>

                    {/* <textarea className='AnotationFormAdd' name="anotacion" id=""></textarea> */}
                    <button type="submit" className='ButtonAdd'>GUARDAR</button>
                    
                </div>

            </form>
        </>
    );
};

export default FormAdd;   