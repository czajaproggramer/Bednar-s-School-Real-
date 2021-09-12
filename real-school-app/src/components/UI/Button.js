import './Button.css';

function Button(props) {
    return (
        <button onClick={props.clickHandle}>{props.title}</button>
    );
}

export default Button;