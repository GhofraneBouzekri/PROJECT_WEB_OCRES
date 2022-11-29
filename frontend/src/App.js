import Note from './note'
import './App.css'
import Horloge from './horloge'
import Calendrier from './calendrier'


export default function App() {
  return (
    <>
      <div className="horlogecompo">
        <Note/>
        <Horloge/>
      </div>
      <div className="calcompo">
        <Calendrier/>
      </div>
    </>
      );
}
