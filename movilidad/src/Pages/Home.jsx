import Card from './../Components/Card'
export default function Home(){
    return(
        <>
            <div className="container">
                <div className="row">
                <Card 
                    titulo="Estacionamiento Medido" 
                    texto="Inicia el servicio de estacionamiento medido para tu vehículo" 
                    boton="Estacionar"
                    url="/parking"
                    />
                <Card 
                    titulo="Alquiler de Eco-Bicis" 
                    texto="Encuentra la bicileta más cercana y comienza a usarla" 
                    boton="Escanear Bicicletas"
                    url="/bikes"
                    />
                </div>
            </div>
        </>
    )

}