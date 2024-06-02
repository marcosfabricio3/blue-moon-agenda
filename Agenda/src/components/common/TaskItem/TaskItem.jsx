import './TaskItem.css'
import GenericButton1 from '../GenericButton1/GenericButton1'

// ESTA FUNCION CREA INDIVIDUALMENTE CADA ELEMENTO PARA SER MOSTRADO EN EL DAILY TASK O EN LA FICHA
function TaskItem ({ id, name, fecha}){
    return (
        <>
            <div className='TaskItem'>
                <div className='TaskBasicInfo'>
                    <p className='TaskHour'>{fecha}</p>
                    <p className='TaskPatient'>{name}</p>
                </div>

                <GenericButton1 id={id} textButton={'FICHA'}/>
                
            </div>
        </>
    )
}

export default TaskItem