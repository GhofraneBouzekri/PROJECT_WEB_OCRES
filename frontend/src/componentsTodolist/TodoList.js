import React from 'react';
import ListeTaches from './Tache';
import './TodoList.css';
import { useState, useEffect } from 'react';
import { v4 as uuidV4 } from "uuid";


const TodoList = () => {

    const initialState = JSON.parse(localStorage.getItem("taches")) || [];
    const [input, setInput] = useState("");
    const [taches, setTaches] = useState(initialState);
    const [editTache, setEditTache] = useState(null);

    const updateTache = (title, id, completed) => {
        const nouvelleTache = taches.map((tache) =>
            tache.id === id ? { title, id, completed } : tache

        )
        setTaches(nouvelleTache);
        setEditTache("");
    };
    useEffect(() => {
        localStorage.setItem("taches", JSON.stringify(taches));
    }, [taches]);
    useEffect(() => {
        if (editTache) {
            setInput(editTache.title);
        }
        else {
            setInput("");
        }

    }, [setInput, editTache]);
    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onEntreeSubmit = (event) => {
        event.preventDefault();
        if (!editTache) {
            setTaches([...taches, { id: uuidV4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTache(input, editTache.id, editTache.completed)
        }

    }





    return (

        <div className="app-wrapper">
            <div className='header'>
                MY TO-DO LIST 
            </div>
            <div>
                <form onSubmit={onEntreeSubmit}>
                    <input type="text"
                        placeholder="Entrez une Tâche..."
                        className="task-input"
                        value={input}
                        required
                        onChange={onInputChange}
                        input={input}
                        setInput={setInput}
                        taches={taches}
                        setTaches={setTaches}
                        editTache={editTache}
                        setEditTache={setEditTache}
                    />
                    <button className="button-add" type="submit">
                        {editTache ? "OK" : "Ajouter"}</button>

                </form>
            </div>
            <div>
                <ListeTaches taches={taches} setTaches={setTaches} setEditTache={setEditTache} />
            </div>


        </div>

    )
}

export default TodoList;




