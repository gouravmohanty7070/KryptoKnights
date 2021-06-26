import React from "react";
import './styles.css'


const ToDo = (props) => {


    return (
        <>
            <div className='todo_style'>
                <i className="far fa-times-circle"
                    onClick={() => {
                        props.onSelect(props.id);
                    }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDo;