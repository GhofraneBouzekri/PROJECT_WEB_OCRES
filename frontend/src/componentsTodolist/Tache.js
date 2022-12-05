import React from "react";
import './TodoList.css';

const ListeTaches = ({ taches, setTaches, setEditTache }) => {

    const handleEdit = ({ id }) => {
        const findTache = taches.find((tache) => tache.id === id);
        setEditTache(findTache);

    }
    const handleDelete = ({ id }) => {
        setTaches(taches.filter((tache) => tache.id !== id));
    }

    return (
        <div>

            {taches.map((tache) => (
                <li className="todo-list" key={tache.id}>
                    <input type="text" value={tache.title}
                        className="list"
                        onChange={(event) => event.preventDefault()} />


                    <div>

                        <button className="button-edit task-button" onClick={() => handleEdit(tache)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(tache)}>
                            <i className="fa fa-trash" ></i>
                        </button>
                    </div>
                </li>

            ))}

        </div>

    )

}
export default ListeTaches;




