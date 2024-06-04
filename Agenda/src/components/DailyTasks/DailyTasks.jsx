import { useState, useEffect } from 'react';
import './DailyTasks.css'
import TaskItem from '../common/TaskItem/TaskItem';

// FUNCIO QUE DEVUELVE UN COMPONENTE CON TODOS LOS PACIENTES AGENDADOS
function DailyTasks(){
    const [data,setData] = useState([]);

    // LLAMA LA API CON TODAS LAS FICHAS
    useEffect(() => {
        fetch('http://localhost:3000/fichas')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, []);

    // FILTRA TODOS LOS ITEMS QUE TENGA RESERVA = TRUE 
    const filterData = data.filter(item => item.reserva);

    return(
        <div className='DailyTaskContainer'>

            {/* EJECUCION DEL FILTRO Y SI TIENE ELEMENTOS LOS DEVUELVE Y SI NO HAY DEVUELVE UN ELEMENTO QUE DICE NO HAY */}
            {filterData.length > 0? (
                filterData.map((ficha) => (
                    <TaskItem key={ficha.id} id={ficha.id} name={ficha.name} fecha={ficha.fecha}/>
                ))
            ) : ( <p>no hay</p> )}

        </div>
    );

};

export default DailyTasks;