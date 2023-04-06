import styles from './Home.module.css';

export const Home = () => {

    return (
        <section className={styles["home"]}>
            
        <div className={styles["home-message"]} >
            <h2>Find the perfect home</h2>
            <h2>with exclusive sea view</h2>
        </div>
       
    </section>
    );
}