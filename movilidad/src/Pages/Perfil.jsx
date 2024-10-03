import { useParams } from "react-router-dom";

export default function Perfil(){
    let {id_perfil} = useParams();
    return(
        <>
        <br />
        <br />
       <h1> Perfil n° {id_perfil}</h1>
        </>
    )
}