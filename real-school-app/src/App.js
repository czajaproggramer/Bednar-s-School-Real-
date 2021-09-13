import React, { useState } from "react";

import HomeWorks from "./components/HomeWorks";

const dhomeWorks = [
  { id: 0, lesson: 'Polski', description: 'napisać wypracowanie o podobieństwach w twórczości Jacka Kaczmarskiego i Peji.' },
  { id: 1, lesson: 'Informatyka', description: 'stworzyć program pobierający od użytkownika pieniądze' },
  { id: 2, lesson: 'Biologia', description: 'serce, choroby serca, profilaktyka, browl stars eeeeel primo' },
  { id: 3, lesson: 'Fizyka', description: 'Fizyka kwantowa, stefek howking i takie tam' },
];

function App() {
  const [homeWorks, setHomeWorks] = useState(dhomeWorks);

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
