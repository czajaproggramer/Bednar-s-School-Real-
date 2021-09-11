import './HomeWorkItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function HomeWorkItem(props) {
    return (
        <div className="wrapper">
            <div className="content">
                <h2>{props.lesson}</h2>
                <p>{props.description}</p>
            </div>
            <div className="actions">
                <FontAwesomeIcon icon={faTrash} onClick={() => props.deleteYourself(props.id)} />
                <FontAwesomeIcon icon={faEdit} />
            </div>
        </div>);
}

export default HomeWorkItem;