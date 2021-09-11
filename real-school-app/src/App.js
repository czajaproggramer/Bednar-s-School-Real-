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

  return (
    <div className="App">
      <HomeWorks deleteItem={deleteItem} data={homeWorks}></HomeWorks>
    </div>
  );
}

export default App;
