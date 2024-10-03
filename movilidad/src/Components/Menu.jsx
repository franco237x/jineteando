export default function Menu(){
    return(
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Inicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Perfil</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Configuracion
                        </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Editar datos</a></li>
                        <li><a className="dropdown-item" href="#">Modificar contraseña</a></li>
                        <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
    </div>
</nav>
        </>
    )
}