import React, { useState, useEffect } from "react";

import HomeWorks from "./components/HomeWork/HomeWorks";

function App() {
  const [homeWorks, setHomeWorks] = useState([]);

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append('Accept', 'text/html');
    myHeaders.append('Access-Control-Allow-Origin', '*');

    const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors'
    };

    let myRequest = new Request('http://127.0.0.1/szkolna/getHomeWorks.php');

    fetch(myRequest, myInit)
    .then(data => data.json())
    .then((result) => {
      console.log(result);
    }, (error) => {
      console.log("Wystąpił błąd");
    });
  }, []);

  const deleteItem = (itemId) => {
    const newHW = homeWorks.filter((hw) => hw.id !== itemId)
    setHomeWorks(newHW);
  }
  const getEdit = data => {
    const hwIndex = homeWorks.findIndex(hw => hw.id === data.id); //Bierzemy index w tablicy zedytowanej rzeczy
    const newHomeWorks = [...homeWorks]; //tworzymy kopię tablicy obiektów 'homeWorks'

    //W kopii tablicy zmieniamy w edytowanej pracy domowej dane na te już zedytowane
    newHomeWorks[hwIndex].lesson = data.lesson;
    newHomeWorks[hwIndex].description = data.description;
    if (data.date !== undefined) {
      newHomeWorks[hwIndex].lesson = data.lesson;
    }

    //Zmieniamy stan na kopię tablicy
    setHomeWorks(newHomeWorks);
  };
  const addHomeWorkHandler = data => {
    setHomeWorks(prevState => {
      return [data, ...prevState];
    });
  }

  return (
    <div className="App">
      <HomeWorks deleteItem={deleteItem} passData={addHomeWorkHandler} passEdit={getEdit} data={homeWorks}></HomeWorks>
    </div>
  );
}

export default App;
