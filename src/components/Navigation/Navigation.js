import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

export const Navigation = () => {

    const {isAuthenticated} = useContext(AuthContext)
    return (
        <nav>
        <Link to="/catalog"> All Properties</Link>
        {isAuthenticated && (
        <div id="user">
        <Link to="/create">Create Property</Link>
        <Link to="/favourites">My favourites</Link>
        <Link to="/logout">Logout</Link>
        </div>
        )}
        {!isAuthenticated && (
        <div id="guest">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
         </div>
        )}

    </nav>
    );
}