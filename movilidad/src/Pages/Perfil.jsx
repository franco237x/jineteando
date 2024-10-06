import { useParams } from "react-router-dom";

export default function Perfil(){
    return(
        <>
        <div className="profile-banner"></div>
        <div className="container">
            <div className="profile">
                <h2>Tu saldo:</h2>
                <h1 id="saldo">$2500.00</h1>
                <button className="btn btn-outline-success">Comprar Saldo</button>
            </div>
        </div>
        </>
    )
}