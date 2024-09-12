import logo from './logo.svg';
import './App.css';
import SupportDevices from "./components/SupportDevices"


import Favorite from "./components/Favorite"

import Teacher from "./components/Teacher"
import Career from "./components/Career"

function App() {
  return (
    <div className="App">
      {/* <div className="app_wrapper"> */}
        <SupportDevices />
      
      {/* <FirstDay /> */}
      {/* <div className="row">
        <div className="col-50">
         
          
           
          <Favorite />
          
        </div>
        <div className="col-50">
          
          
          <Career />
          
        </div>
      </div> */}
      {/* </div> */}
    </div>
  );
}

export default App;
