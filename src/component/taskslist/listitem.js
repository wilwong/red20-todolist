import React, {useState} from 'react';
import './style.css';

function ListItem(props){
    const [isDone, toggleDone] = useState(false);
    const className = 'list-item ' + (isDone?'done':'');
	return(
	    <div className={className}>
            <span>{props.text}</span>
            <span>
	            { !isDone && <span onClick={toggleDone}>✓</span> }
	            {/*<span onClick={props.onDelete}>✗</span>*/}
            </span>
        </div>
    )
}

export default ListItem;