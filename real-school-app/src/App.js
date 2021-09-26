import React, { useState, useEffect, useContext } from "react";

import HomeWorks from "./components/HomeWork/HomeWorks";
import HWContext from "./store/hw-context";

let hwHeaders = new Headers();
hwHeaders.append('Accept', 'text/html');
hwHeaders.append('Access-Control-Allow-Origin', '*');

const hwInit = {
  method: 'GET',
  headers: hwHeaders,
  mode: 'cors'
};

let hwRequest = new Request('http://127.0.0.1/szkolna/getHomeWorks.php');

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

  const [sbList, setSbList] = useState([]);

  useEffect(() => {
    fetch(hwRequest, hwInit)
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
      ctx.setHwList(prevState => {
        return fetchedObjects
      });

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
    }, (error) => {
      console.log("Wystąpił błąd");
    });
  }, []);

  return (
    <div className="App">
      <HomeWorks sbList={sbList}></HomeWorks>
    </div>
  );
}

export default App;
