import React, { useState, useEffect, useContext} from "react";

import './AddHomeWork.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import AddHomeWorkOption from "./AddHomeWorkOption";
import HWContext from "../../store/hw-context";

let myHeaders = new Headers();

myHeaders.append('Accept', 'text/html');
myHeaders.append('Access-Control-Allow-Origin', '*');

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors'
};

let myRequest = new Request('http://127.0.0.1/szkolna/getSubjects.php');

function AddHomeWork(props) {
    const ctx = useContext(HWContext);

    //stany dla zmiennych z formularza: daty, lekcji i opisu
    const [enteredDate, setEnteredDate] = useState('2021-09-12');
    const [enteredSubject, setEnteredSubject] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    
    //stan dla listy lekcji
    const [subjectsList, setSubjectsList] = useState([]); 

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
            const homeWorkData = { //Z danych z formularza tworzymy obiekt, który potem dodamy do tablicy obiektów 'homeWorks' w App.js
                id: Math.random(),
                date: enteredDate,
                lesson: enteredSubject,
                description: enteredDescription
            };
            ctx.addHwHandler(homeWorkData); //Podajemy dane do HomeWorks.js
            props.closeWindow();
        }
    };

    useEffect(() => {
        fetch(myRequest, myInit)
        .then((data) => data.json())
        .then((result) => {
            let subjects = result.map(subject => {
                    const object = {
                        id: subject[0],
                        name: subject[1]
                };
                return object;
            });
            setSubjectsList(prevState => {
                return subjects
            });
        }, (error) => {
            console.log("Wystąpił błąd: " + error);
        })
    }, []);


    return (
        <div className="addWrapper">
            <div className="infoRow"><h2>Dodaj pracę domową</h2> <FontAwesomeIcon icon={faTimes} color="red" onClick={props.closeWindow} /></div>
            <form onSubmit={submitHandler}>
                <div className="inputItem">
                    <label>Wybierz datę</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="inputItem">
                    <label>Wybierz przedmiot</label>
                    <select value={enteredSubject} onChange={subjectChangeHandler}>
                        {subjectsList.map(subject => {
                            return <AddHomeWorkOption key={subject.id} label={subject.name}/>
                        })}
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
        </div>
    );
}

export default AddHomeWork;