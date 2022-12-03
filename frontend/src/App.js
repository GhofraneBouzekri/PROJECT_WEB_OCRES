import Note from './note'
import './App.css'
import Horloge from './horloge'
import Calendrier from './calendrier'

export default function App() {
  return (
    <>
      <div className="horlogecompo">
        <Horloge/>
        <Note/>
      </div>
      <div className="calcompo">
        <Calendrier/>
      </div>
    </>
      );
}
