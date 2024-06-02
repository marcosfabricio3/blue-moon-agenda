import './FormAdd.css'

function FormAdd() {
    return(
        <>
            <form className='FormAdd' action="">

                <p className='TitleFormAdd'>Nueva hora</p>

                <div className='ContainerData'>

                <label className='LongLabel' htmlFor="nombre">Nombre</label>
                <input className='InputLong' type="text" name='nombre' />

                <label className='LongLabel' htmlFor="Tratamiento">Tratamiento</label>
                <input className='InputLong' type="text" name='Tratamiento' />

                <label className='LongLabel' htmlFor="">Telefono</label>
                <input className='InputLong' type="tel" name='Telefono'/>

                <label className='LongLabel' htmlFor="Fecha">Fecha</label>
                <input className='InputLong' type="number" name="Fecha" id="" />

                <label className='LongLabel' htmlFor="Precio">Precio</label>
                <input className='InputLong' type="text" name='Precio' />

                </div>

                <div className='AntationAndButtonContainer'>
                    <textarea className='AnotationFormAdd' name="" id=""></textarea>
                    <p className='SendFormAdd'>Guardar</p>
                </div>

            </form>
        </>
    );
};

export default FormAdd;