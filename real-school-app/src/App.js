import React, { useState, useEffect, useContext } from "react";
import { Route, Redirect, Switch } from 'react-router-dom';

import HomeWorks from "./components/HomeWork/HomeWorks";
import LogIn from "./components/LogIn/LogIn";

import HWContext from "./store/hw-context";
import AuthContext from "./store/auth-context";

let sbHeaders = new Headers();

sbHeaders.append('Accept', 'text/html');
sbHeaders.append('Access-Control-Allow-Origin', '*');

const sbInit = {
    method: 'GET',
    headers: sbHeaders,
    mode: 'cors'
};

let sbRequest = new Request('http://127.0.0.1/szkolna/getSubjects.php');

function App() {
  const ctx = useContext(HWContext);
  const authCtx = useContext(AuthContext);

  const [sbList, setSbList] = useState([]);

  useEffect(() => {
    fetch(sbRequest, sbInit)
    .then((data) => data.json())
    .then((result) => {
      let subjects = result.map(subject => {
        const object = {
          id: subject[0],
          name: subject[1]
        };  
        return object;
      });
      setSbList(prevState => {
        return subjects
      });
    });

  }, []);



  return (
    <React.Fragment>
      <Switch>
        {authCtx.isLoggedIn ? 
        <React.Fragment>
            <Route exact path="/">
              <Redirect to="/hw" />
            </Route>
            <Route path="/hw" component={HomeWorks} />
          </React.Fragment> :
          <Route path="/" component={LogIn} />
        }
      </Switch>
    </React.Fragment>
  );
}

export default App;
