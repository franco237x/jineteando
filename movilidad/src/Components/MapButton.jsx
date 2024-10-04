const clickCamera = ()=>{
    alert("Click hecho")
}

export default function MapButton(){
    return(
        <div className="leaflet-bottom leaflet-left">
            <button className="btn btn-light escaner" onClick={clickCamera}>📷</button>
        </div>
    )
}