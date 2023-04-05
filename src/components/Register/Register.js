import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
    const {onRegisterSubmitHandler, hasError} = useContext(AuthContext);
    const {values, formErrors, onBlur, onChangeHandler, onSubmit} = useForm({
        email: "",
        password: "",
        confirmPassword: ""
    }, onRegisterSubmitHandler)

    return (
        <section id="register-page" className="content auth">
             {hasError && (
                <div>
                    <div className="errorContainer">
                         <p>{hasError}</p>
                    </div>
                </div>
            )}
        <form id="register" method="POST" onSubmit={onSubmit}>
            <div className="container">
                <h1>Register</h1>

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
                <label htmlFor="pass">Password:</label>
                <input
                type="password"
                name="password"
                id="register-password"
                value={values.password}
                onChange={onChangeHandler}
                onBlur={onBlur}
                />
                 {formErrors['password'] && (
                <p className="form-error">{formErrors.password}</p>
                )}
                <label htmlFor="confirm-pass">Confirm Password:</label>
                <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={values.confirmPassword} 
                onChange={onChangeHandler}
                onBlur={onBlur}
                />
                 {formErrors['confirmPassword'] && (
                <p className="form-error">{formErrors.confirmPassword}</p>
                )}
                <input className="btn submit" type="submit" value="Sign up"/>

                <p className="field">
                    <span>If you already have a profile sign in <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
    );
}