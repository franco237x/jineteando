export default function Cards(){
    return(
        <>
        <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Estacionamiento Medido</h5>
                    <p className="card-text">Inicia el servicio de estacionamiento medido para tu vehículo.</p>
                    <a href="#" className="btn btn-primary">Iniciar</a>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Alquiler de Eco-Bicis</h5>
                    <p className="card-text">Encuentra la bicileta más cercana y comienza a usarla</p>
                    <a href="#" className="btn btn-primary">Iniciar</a>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}