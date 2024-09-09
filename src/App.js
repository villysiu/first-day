import logo from './logo.svg';
import './App.css';
import Name from "./components/Name"
import Grade from "./components/Grade"
import Age from "./components/Age"
import Favorite from "./components/Favorite"
import Calendar from "./components/Calendar"
import Teacher from "./components/Teacher"
function App() {
  return (
    <div className="App">
      <Name />
      <Grade />
      <div className="row">
        <div className="col-50">
         
          <Age /> 
           
          <Favorite />
        </div>
        <div className="col-50">
          <Calendar />
          <Teacher />
          <div className="row-30">When I grow up </div>
        </div>
      </div>
    </div>
  );
}

export default App;
