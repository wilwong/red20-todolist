import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';

const useStyles = makeStyles({
  textfieldInput: {
  	color: 'white',
  },
  button:{
  	color: 'white',
  }
});

//CssTextField extends TextField with extra styles
const CssTextField = withStyles({
  root: {
  	marginRight: '1em',

    '& .MuiInput-underline:before': {
      borderBottomColor: '#e0e0e0',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#e0e0e0',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  },
})(TextField);


function InputField(props){
	const styleClasses = useStyles();

	const [tempTask, setTempTask] = useState('');
	const handleInputChange = function(event){
    	setTempTask(event.target.value);
	}
	const saveTask = function(){
		if(tempTask.trim().length > 0){
			props.onSave(tempTask);
			setTempTask('');
		}
	}
	return(
		<div className='input-module'>
		 	<CssTextField
		 		//this send props directly to the inner component - input 
		 		InputProps={{
		        	className: styleClasses.textfieldInput
		        }}

		        //these are the props of textfield
		        fullWidth
		 		value={tempTask} 
		 		onChange={handleInputChange}
		 	/>
			{/*
			<input 
				type="text" 
				value={tempTask}
				name="todolist" 
				className="input-field"
				onChange={handleInputChange}
			/>
			<button className="button-add" onClick={saveTask}>
				Add
			</button>
			*/}
	      	<Button className={styleClasses.button} onClick={saveTask}>
				Add
			</Button>
      	</div>
    )
}

export default InputField;