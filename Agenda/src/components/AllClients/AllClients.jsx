import CallApi from "../CallApi";
import DataClientItem from "../common/DataClientItem/DataClientItem";

import './AllClients.css'

function AllClients() {
    const {data} = CallApi('http://localhost:3000/fichas');

    if (!data) return <div>Loading...</div>

    return (
        <>
            <div className="AllClientsContainer">

                {data.map((client) => (

                    <DataClientItem
                    key={client.id} 
                    id={client.id} 
                    name={client.name} 
                    celular={client.celular} 
                    en_tratamiento={client.en_tratamiento ? 'SI' : 'NO'} 
                    reserva={client.reserva ? 'SI' : 'NO'} />

                ))}
            </div>
        </>
    );
};

export default AllClients;