export const Login = () => {
    return (
        <section id="login-page" className="auth">
        <form id="login">

            <div className="container">
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="login-pass">Password:</label>
                <input type="password" id="login-password" name="password"/>
                <input type="submit" className="btn submit" value="Sign in"/>
                <p className="field">
                    <span>If you don't have a profile sign up <a href="/register">here</a></span>
                </p>
            </div>
        </form>
    </section>
    );
}