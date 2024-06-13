import CallApi from "../CallApi";
import DetectDay from "./DetectDay/DetectDay";

function DayTask({day}) {
    const { data } =  CallApi('http://localhost:3000/fichas');
    const diaSemana = DetectDay(day);

    return(
        <>
            <div>
                <p>{day} {diaSemana}</p>
            </div>
        </>
    );
};

export default DayTask;