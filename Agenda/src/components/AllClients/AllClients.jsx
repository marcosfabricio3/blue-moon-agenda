// COMPONENTS
import CallApi from "../CallApi";
import DataClientItem from "../common/DataClientItem/DataClientItem";

// CSS
import "./AllClients.css";

function AllClients() {
  const { data } = CallApi("http://localhost:3000/fichas");

  // IF THERE IS NO DATA, IT RETURN...
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="AllClientsContainer">

        {/* RETURN ONE ITEM FOR EACH ELEMENT IN THE DATABASE */}
        {data.map((client) => (
          <DataClientItem
            key={client.id}
            id={client.id}
            name={client.name}
            celular={client.celular}
            en_tratamiento={client.en_tratamiento ? "SI" : "NO"}
            reserva={client.reserva ? "SI" : "NO"}
          />
        ))}

      </div>
    </>
  );
}

export default AllClients;