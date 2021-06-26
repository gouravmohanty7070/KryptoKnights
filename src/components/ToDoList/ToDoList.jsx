import React, { useState } from 'react';
import ToDo from './ToDo';
import './styles.css'




function ToDoList() {

    const [inputList, setInputList] = useState(""); //shows whatever we type on inout inside insput, will pass the text but not store it.
    const [items, setItems] = useState([]); //for adding the second element

    const itemEvent = (event) => {
        setInputList(event.target.value);
        //to access the object, whatever the user writes in the input, setInputList value is changed anClick and the value is passed to the current value that is the inputList 
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList] //on button click, whatever the user types, it will be stored in inputlist, and then the items will be stored in empty array in setItems through olditemsa nd that value will become the current value that is the items that is being mapped in <li>

        });
        setInputList("");
    }

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrayElem, index) => {
                return index !== id;
            }) //if u click on cross, it will give u the id and current text and if the index number matches with oldItem,delete it and it returns others that wont match
        })
    }

    //


    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <div className="heading">
                        <h1 >To-Do List</h1>
                    </div>

                    <br />
                    <div className="form">

                        <input
                            type="text"
                            placeholder="Write a note"
                            onChange={itemEvent}
                            value={inputList}
                        />
                        <button onClick={listOfItems}>
                            <span>+</span></button>

                    </div>

                    <ol>
                        {items.map((itemval, index) => {
                            return <ToDo
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}
                            />
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
export default ToDoList;