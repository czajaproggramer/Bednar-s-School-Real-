import React, { useState } from 'react';

import './HomeWorkItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import EditHomeWork from './EditHomeWork';

function HomeWorkItem(props) {
    const [whatToShow, setWhatToShow] = useState(0); //0 - normalny tryb; 1 - tryb edycji

    const cancelEditing = () => {
        setWhatToShow(0);
    };
    const acceptEditing = data => {
        props.passEdit(data);
    };

    return (
        <div>
            {whatToShow === 0 ? <div className="wrapper">
                <div className="content">
                    <h2>{props.lesson}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="actions">
                    <FontAwesomeIcon icon={faTrash} onClick={() => props.deleteYourself(props.id)} />
                    <FontAwesomeIcon icon={faEdit} onClick={() => { setWhatToShow(1) }} />
                </div>
            </div>
                :
                <EditHomeWork
                    id={props.id}
                    date={props.date}
                    subject={props.lesson}
                    description={props.description}
                    cancelEditing={cancelEditing}
                    acceptEditing={acceptEditing}>
                </EditHomeWork>
            }
        </div>
    );
}

export default HomeWorkItem;