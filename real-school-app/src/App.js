import React, { useEffect, useContext } from "react";

import HomeWorks from "./components/HomeWork/HomeWorks";
import HWContext from "./store/hw-context";

let myHeaders = new Headers();
myHeaders.append('Accept', 'text/html');
myHeaders.append('Access-Control-Allow-Origin', '*');

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors'
};

let myRequest = new Request('http://127.0.0.1/szkolna/getHomeWorks.php');

function App() {
  const ctx = useContext(HWContext);

  useEffect(() => {
    fetch(myRequest, myInit)
    .then(data => data.json())
    .then((result) => {
      let fetchedObjects = result.map(element => {
        const object = {
          id: element[0],
          lesson: element[2],
          description: element[1],
          date: element[3]
        }
        return object;
      });
      // result.forEach(element => {
      //   const object = {
      //     id: element[0],
      //     lesson: element[1],
      //     description: element[2],
      //     date: element[3]
      //   };
      //);
      ctx.setHwList(prevState => {
        return fetchedObjects
      });
    }, (error) => {
      console.log("Wystąpił błąd");
    });
  }, []);

  return (
    <div className="App">
      <HomeWorks></HomeWorks>
    </div>
  );
}

export default App;
