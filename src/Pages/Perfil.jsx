import VehiculoEnPerfil from "../Components/vehiculoEnPerfil";

export default function Perfil(){
    return(
        <>
        <div className="profile-banner"></div>
        <div className="container">
            <div className="profile">
                <h2>Saldo:</h2>
                <h1 id="saldo">$2905.94</h1>
                <button className="btn btn-outline-success">Comprar Saldo</button>
                <hr />
                <VehiculoEnPerfil/>
                {/*Acá podrían ir los movimientos*/}
            </div>
        </div>
        </>
    )
}