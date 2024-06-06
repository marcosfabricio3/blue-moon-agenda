import "./DataClientItem.css";

function DataClientItem({ id, name, celular, en_tratamiento, reserva }) {
  return (
    <>
      <div key={id} className="DataClientItem">

        <div className="InfoClient">
          <p className="ElementData"><span className="SpanData">Cliente :</span> {name}</p>
          <p className="ElementData"><span className="SpanData">N° de Celular :</span> {celular}</p>
          <p className="ElementData"><span className="SpanData">En tratamiento Actualmente :</span>{" "}{en_tratamiento}</p>
          <p className="ElementData"><span className="SpanData">Turno reservado Actualmente :</span>{" "}{reserva}</p>
        </div>

        <div className="HistoriContainer">

          <button className="ButtonHistori">Historial</button>
          <div className="ClientId">#{id}</div>

        </div>

      </div>
    </>
  );
}

export default DataClientItem;