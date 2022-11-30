import Note from './note'
import './App.css'
import TodoList from './TodoList'
import Horloge from './horloge'
import Calendrier from './calendrier'


export default function App() {
  return (
    <>
      <div className="horlogecompo">
        <TodoList/>
        <Horloge/>
        <Note/>
      </div>
      <div className="calcompo">
        <Calendrier/>
      </div>
    </>
      );
}
