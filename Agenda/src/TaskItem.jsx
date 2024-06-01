import './TaskItem.css'

function TaskItem ({ id, name, hora}){
    return (
        <>
            <div className='TaskItem'>
                <div className='TaskBasicInfo'>
                    <p className='TaskHour'>24/5/7</p>
                    <p className='TaskPatient'>{name}</p>
                </div>
                <p className='TaskPatientRecord' id={id}>FICHA</p>
            </div>
        </>
    )
}

export default TaskItem