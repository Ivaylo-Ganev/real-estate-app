import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
        <Link to="/catalog"> All Properties</Link>
        <div id="user">
            <Link to="/create">Create Property</Link>
            <Link to="/logout">Logout</Link>
        </div>
        <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </nav>
    );
}