import React, {useContext, useState} from "react";
// import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const LogIn = (props) => {
    const authCtx = useContext(AuthContext);

    const [enteredLogin, setEnteredLogin] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    // let history = useHistory();

    const loginChangeHandler = event => {
        setEnteredLogin(event.target.value);
    };

    const passwordChangeHandler = event => {
        setEnteredPassword(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        authCtx.logIn(enteredLogin, enteredPassword);
        // authCtx.setIsLoggedIn(true);
        // history.push('/');
    };

    return (
        <div className="loginFormWrapper">
            <form onSubmit={onSubmitHandler}>
                <div className="loginFieldWrapper">
                    <label>Login</label>
                    <input type="text" value={enteredLogin} onChange={loginChangeHandler} />
                </div>
                <div className="loginFieldWrapper">
                    <label>Password</label>
                    <input type="text" value={enteredPassword} onChange={passwordChangeHandler} />
                </div>
                <div className="loginSubmit">
                    <button type="submit">Zaloguj</button>
                </div>
            </form>
        </div>
    );
}

export default LogIn;