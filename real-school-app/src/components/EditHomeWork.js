import './EditHomeWork.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function EditHomeWork(props) {
    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className="editWrapper">
            <form onSubmit={submitHandler} className="eContent">
                <input type="text" value={props.subject} className="subjectInput" />
                <input type="text" value={props.description} className="descriptionInput" />
            </form>
            <div className="actions">
                <FontAwesomeIcon icon={faCheck} />
                <FontAwesomeIcon icon={faTimes} onClick={props.cancelEditing} />
            </div>
        </div>
    )
};

export default EditHomeWork;