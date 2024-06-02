import './FormAdd.css'
import InputForm from '../../common/InputForm/InputForm';
import GenericButton1 from '../../common/GenericButton1/GenericButton1';

function FormAdd() {
    return(
        <>
            <form className='FormAdd' action="">

                <p className='TitleFormAdd'>Nueva hora</p>

                <div className='ContainerData'>

                    <InputForm TextInput={"Nombre"}/>
                    <InputForm TextInput={"Tratamiento"}/>
                    <InputForm TextInput={"Telefono"}/>
                    <InputForm TextInput={"Fecha"}/>
                    <InputForm TextInput={"Precio"}/>

                </div>

                <div className='AntationAndButtonContainer'>
                    <textarea className='AnotationFormAdd' name="" id=""></textarea>

                    <GenericButton1 textButton={'GUARDAR'}/>
                    
                </div>

            </form>
        </>
    );
};

export default FormAdd;