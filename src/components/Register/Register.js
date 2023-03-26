export const Register = () => {
    return (
        <section id="register-page" className="content auth">
        <form id="register">
            <div className="container">
                <h1>Register</h1>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password"/>

                <label htmlFor="confirm-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password"/>

                <input className="btn submit" type="submit" value="Sign up"/>

                <p className="field">
                    <span>If you already have a profile sign in <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
    );
}