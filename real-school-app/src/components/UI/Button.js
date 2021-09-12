import './Button.css';

function Button(props) {
    const classes = 'basic ' + props.className;
    return (
        <button className={classes} onClick={props.clickHandle}>{props.title}</button>
    );
}

export default Button;