import React, { useState } from 'react';

import './EditHomeWork.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function EditHomeWork(props) {
    const [subject, setSubject] = useState(props.subject);
    const [description, setDescription] = useState(props.description);

    const subjectChangeHandler = event => {
        setSubject(event.target.value);
    };
    const descriptionChangeHandler = event => {
        setDescription(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const homeWorkData = {
            id: props.id,
            lesson: subject,
            description: description,
            date: props.date
        };

        props.acceptEditing(homeWorkData);
        props.cancelEditing();
    };

    return (
        <form onSubmit={submitHandler} className="eContent">
            <div>
                <input type="text" value={subject} className="subjectInput" onChange={subjectChangeHandler} />
                <input type="text" value={description} className="descriptionInput" onChange={descriptionChangeHandler} />
            </div>
            <div className="actions">
                <button type="submit"><FontAwesomeIcon icon={faCheck} /></button>
                <FontAwesomeIcon icon={faTimes} onClick={props.cancelEditing} />
            </div>
        </form>
    )
};

export default EditHomeWork;