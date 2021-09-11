import HomeWorks from "./components/HomeWorks";

function App() {
  const homeWorks = [
    { lesson: 'Polski', description: 'napisać wypracowanie o podobieństwach w twórczości Jacka Kaczmarskiego i Peji.' },
    { lesson: 'Informatyka', description: 'stworzyć program pobierający od użytkownika pieniądze' },
    { lesson: 'Biologia', description: 'serce, choroby serca, profilaktyka, browl stars eeeeel primo' },
    { lesson: 'Fizyka', description: 'Fizyka kwantowa, stefek howking i takie tam' },
  ];

  return (
    <div className="App">
      <HomeWorks data={homeWorks}></HomeWorks>
    </div>
  );
}

export default App;
