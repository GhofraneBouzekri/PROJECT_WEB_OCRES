import Note from './componentsNote/note'
import './App.css'
import TodoList from './componentsTodolist/TodoList'
import Horloge from './componentsHorloge/horloge'
import Calendrier from './componentsCalendrier/calendrier'
import Chart from './componentsChart/chart'
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
