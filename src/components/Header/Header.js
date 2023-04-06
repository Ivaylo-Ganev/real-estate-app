import styles from './Header.module.css';
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {

    return (
        <header>
        <h1><Link className={styles["home"]} to="/">LuxurySeaHomes</Link></h1>
        <Navigation />
    </header>
    );
}