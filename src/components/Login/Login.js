import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Login = () => {

    const {onLoginSubmitHandler} = useContext(AuthContext);
    const {values, formErrors, onBlur, onSubmit, onChangeHandler} = useForm({
        email: '',
        password: ''
    }, onLoginSubmitHandler)
    
    return (
        <section id="login-page" className="auth">
        <form id="login" action="POST" onSubmit={onSubmit}>

            <div className="container">
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
                <input type="submit" className="btn submit" value="Sign in"/>
                <p className="field">
                    <span>If you don't have a profile sign up <a href="/register">here</a></span>
                </p>
            </div>
        </form>
    </section>
    );
}