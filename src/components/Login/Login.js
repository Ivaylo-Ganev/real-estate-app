import styles from './Login.module.css';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Login = () => {

    const {onLoginSubmitHandler, hasLoginError} = useContext(AuthContext);
    const {values, formErrors, onBlur, onSubmit, onChangeHandler} = useForm({
        email: '',
        password: ''
    }, onLoginSubmitHandler)
    
    return (
        
        <section className={`${styles["login-page"]} ${styles["auth"]}`} >
            {hasLoginError && (
                <div>
                    <div className="errorContainer">
                         <p>{hasLoginError}</p>
                    </div>
                </div>
            )}
            
        <form id="login" action="POST" onSubmit={onSubmit}>

            <div className={styles["container"]}>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={values.email} 
                onChange={onChangeHandler} 
                onBlur={onBlur}
                />
                {formErrors['email'] && (
                <p className="form-error">{formErrors.email}</p>
                )}

                <label htmlFor="login-pass">Password:</label>
                <input
                type="password"
                id="login-password"
                name="password"
                value={values.password}
                onChange={onChangeHandler}
                onBlur={onBlur}
                />
                {formErrors['password'] && (
                <p className="form-error">{formErrors.password}</p>
                )}
                <input type="submit" className={`${styles["btn"]} ${styles["submit"]}`} value="Sign in"/>
                <p className={styles["field"]}>
                    <span>If you don't have a profile sign up <a href="/register">here</a></span>
                </p>
            </div>
        </form>
    </section>
    );
}