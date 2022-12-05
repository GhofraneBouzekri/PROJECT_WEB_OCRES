import Note from './note'
import './App.css'
import TodoList from './componentsTodolist/TodoList';
import Horloge from './horloge'
import Calendrier from './calendrier'

export default function App() {
  return (
    <>
    <div className="titredash">
      <h1>Aide à la productivité</h1>
    </div>
      <div className="todolistcompo">
        <TodoList/>
        <div className="horlogecompo">
        <Horloge/>
        <Note/>
        </div>
        <div className="calcompo">
        <Calendrier/>
        </div>
      </div>
    </>
      );
}
