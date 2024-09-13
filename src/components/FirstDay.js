import {useState} from 'react';

import Name from "./Name"
import Grade from "./Grade"
import Age from "./Age"
import Calendar from "./Calendar"
import Crayon from "./Crayon"
import Teacher from "./Teacher"
import Career from "./Career"
import Favorite from './Favorite'
const FirstDay = () =>{
    const [favColor, setFavColor] = useState("red")
    return (
        <div>
            <Name favColor={favColor} />
            <Grade />
            <div className="row1">
                <Age />
                <Calendar />
                {/* <div className="row2"> */}
                <Crayon setFavColor={setFavColor} />
                
                {/* </div> */}
                <Favorite />
            </div>
            <div className="row1">
                <Career />
                <Teacher />
            </div>
        </div>
    )
}
export default FirstDay