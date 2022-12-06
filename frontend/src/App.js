import Note from './note'
import './App.css'
import TodoList from './componentsTodolist/TodoList';
import Horloge from './horloge'
import Calendrier from './calendrier'
import Chart from './chart'
import Youtube from './componentsYoutube/youtube'

export default function App() {
  return (
    <>
    <div>
      <body>
        <div className="container">
        <div className="titredash">
          <h1>Aide à la productivité</h1>
        </div>
        <div className="todolistcompo">
          <TodoList/>
        </div>
        <div className="horlogecompo">
          <Horloge/>
        </div>
        <div className="notecompo">
          <Note/>
        </div>
        <div className="Youtubecompo">
          <Youtube/>
        </div>
        <div className="calcompo">
          <Calendrier/>
        </div>
        <div className="Graphcompo">
          <Chart/>
        </div>


        </div>
        
      </body>
    </div>
    </>
      );
}
