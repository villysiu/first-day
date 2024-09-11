import {useState} from 'react';

import Name from "./Name"
import Grade from "./Grade"
import Age from "./Age"
import Calendar from "./Calendar"
import Crayon from "./Crayon"
const FirstDay = () =>{
    const [favColor, setFavColor] = useState("red")
    return (
        <div>
            <Name favColor={favColor} />
            <Grade />
            <div className="row1">
                <Age />
                <Calendar />
                <Crayon setFavColor={setFavColor} />
            </div>
        </div>
    )
}
export default FirstDay