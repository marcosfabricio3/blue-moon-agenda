import './TaskItem.css'

function TaskItem (){
    return (
        <>
            <div className='TaskItem'>
                <div className='TaskBasicInfo'>
                    <p className='TaskHour'>26/6/2024</p>
                    <p className='TaskPatient'>Marcos Fabricio Garcia Grania</p>
                </div>
                <p className='TaskPatientRecord'>FICHA</p>
            </div>
        </>
    )
}

export default TaskItem