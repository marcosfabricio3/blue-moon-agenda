import './TaskItem.css'

// ESTA FUNCION CREA INDIVIDUALMENTE CADA ELEMENTO PARA SER MOSTRADO EN EL DAILY TASK O EN LA FICHA
function TaskItem ({ id, name, fecha}){
    return (
        <>
            <div className='TaskItem'>
                <div className='TaskBasicInfo'>
                    <p className='TaskHour'>{fecha}</p>
                    <p className='TaskPatient'>{name}</p>
                </div>
                <p className='TaskPatientRecord' id={id}>FICHA</p>
            </div>
        </>
    )
}

export default TaskItem