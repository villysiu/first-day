import logo from './logo.svg';
import './App.css';
import Name from "./components/Name"
import Grade from "./components/Grade"
import Age from "./components/Age"
import Favorite from "./components/Favorite"
import Calendar from "./components/Calendar"
import Teacher from "./components/Teacher"
import Career from "./components/Career"
import Crayon from "./components/Crayon"
function App() {
  return (
    <div className="App">
      {/* <Name /> */}
      <Grade />
      {/* <div className="row">
        <div className="col-50">
         
          <Age /> 
           
          <Favorite />
          <Crayon />
        </div>
        <div className="col-50">
          <Calendar />
          <Teacher />
          <Career />
          
        </div>
      </div> */}
    </div>
  );
}

export default App;
