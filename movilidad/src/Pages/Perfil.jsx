import { useParams } from "react-router-dom";

export default function Perfil(){
    return(
        <>
        <div className="profile-banner"></div>
        <div className="container">
            <div className="profile">
                <h2>Tu saldo:</h2>
                <h1 id="saldo">$2905.94</h1>
                <button className="btn btn-outline-success">Comprar Saldo</button>
                <hr />
                <div className="row">
                    <h3>Mis vehículos</h3>
                </div>
                <div className="row">
                    <div className="col-8">
                        <select className="form-select">
                            <option defaultValue disabled>Seleccionar</option>
                            <option valuename="AA123AA">AA123AA</option>
                        </select>

                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary">Agregar</button>
                        </div>
                </div>
                <button className="btn btn-success">
                    Iniciar Estacionamiento
                </button>
            </div>
        </div>
        </>
    )
}