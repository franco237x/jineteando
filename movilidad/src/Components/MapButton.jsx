const clickCamera = ()=>{
    alert("Abrir cámara")
}

export default function MapButton(){
    return(
        <div className="bt-escaner">
            <button className="btn btn-light escaner" onClick={clickCamera}>
                <img src="/qr_code.svg" height={35}/>

            </button>
        </div>
    )
}