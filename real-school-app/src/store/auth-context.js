import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const AuthContext = React.createContext({
    isLoggedIn: false,
    setIsLoggedIn: (boolean) => {},
    userId: null,
    setUserId: (id) => {},
    logIn: (login, pass) => {}
});

export const AuthContextProvider = (props) => {
    let history = useHistory();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = (login, pass) => {
        axios({
            method: 'post',
            url: 'http://localhost/szkolna/login.php',
            mode: 'no-cors',
            withCredentials: true,
            headers: {
                'Zaraz-Dostane-Kurwicy': 'JebacCORS'
            },
            data: {
                login: login,
                password: pass
            }
        })
        .then(response => {
            if (response.data === 1) {
                setIsLoggedIn(true);
                history.push('/');
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn, logIn: logIn}}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;