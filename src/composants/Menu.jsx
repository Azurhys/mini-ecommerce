import { NavLink , useNavigate } from "react-router-dom"

function Menu() {
    const navigate = useNavigate()
    const handleLogout = (e) => {
        e.preventDefault();
        logout()
        navigate("/login")
    }
    return ( 
        <div className="bg-dark mb-3">
            {/**
             * primary : bleu
             * secondary : gris
             * success : vert
             * danger : rouge
             * warning : orange
             * info : bleu turquoise
             * dark : noir 
             * light : blanc gris très léger 
             */}
            <nav className="navbar navbar-expand navbar-dark container">
                <span className="navbar-brand fs-3">
                    Mini E-Commerce
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link"
                        }}>Accueil</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">    
                    <li className="nav-item ">
                        <NavLink to="/panier" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link"
                        }}>Panier</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default Menu;