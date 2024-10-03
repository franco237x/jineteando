export default function Card(props){
    return(
        <>
        <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.texto}</p>
                    <a href="/bikes" className="btn btn-primary">{props.boton}</a>
                </div>
                </div>
        </div>
        </>
    )
}