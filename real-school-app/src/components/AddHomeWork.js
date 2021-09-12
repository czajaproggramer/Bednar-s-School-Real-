import React, { useState } from "react";

import './AddHomeWork.css';

import Card from './UI/Card';

function AddHomeWork(props) {
    //stany dla zmiennych z formularza: daty, lekcji i opisu
    const [enteredDate, setEnteredDate] = useState('2021-09-12');
    const [enteredSubject, setEnteredSubject] = useState('Informatyka');
    const [enteredDescription, setEnteredDescription] = useState('');

    //system przechowywania zmiennych w stanach
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value)
    };
    const subjectChangeHandler = event => {
        setEnteredSubject(event.target.value);
    };
    const descriptionChangeHandler = event => {
        setEnteredDescription(event.target.value);
    };

    //system zatwierdzania formularza
    const submitHandler = event => {
        event.preventDefault(); //Dzięki temu nie odświeży się strona

        if (enteredDescription.length > 0) { //Sprawdzamy czy użytkownik dodał opis
            const homeWorkData = { //Z danych z formularza tworzymy obiekt, który potem dodamy do tablicy 'homeWorks; w App.js
                date: enteredDate,
                lesson: enteredSubject,
                description: enteredDescription
            };
            props.passHWData(homeWorkData); //Podajemy dane do HomeWorks.js
        }
    };

    return (
        <Card className="column centered">
            <form onSubmit={submitHandler}>
                <div className="inputItem">
                    <label>Wybierz datę</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="inputItem">
                    <label>Wybierz przedmiot</label>
                    <select value={enteredSubject} onChange={subjectChangeHandler}>
                        <option value="Matematyka">Matematyka</option>
                        <option value="Informatyka">Informatyka</option>
                        <option value="Biologia">Biologia</option>
                        <option value="Angielski">Angielski</option>
                        <option value="Historia">Historia</option>
                        <option value="Polski">Polski</option>
                    </select>
                </div>
                <div className="inputItem">
                    <label>Dodaj opis</label>
                    <input type="text" value={enteredDescription} onChange={descriptionChangeHandler} />
                </div>
                <div className="inputAction">
                    <button type="submit">Dodaj pracę domową</button>
                </div>
            </form>
        </Card>
    );
}

export default AddHomeWork;