import React from 'react';
import './style.css';
import ListItem from './listitem.js';

function TasksList(props){
	console.log('TASKS LIST RERENDERED');
	return(
		<ul className="tasks-list">
	    {
	        props.tasks.map((item, i)=>(
	          	<li key={i}><ListItem text={item} /></li>
	        ))
	    }
        </ul>
    )
}

export default TasksList;