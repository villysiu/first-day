import Name from "./Name"
import Grade from "./Grade"
import Age from "./Age"
import Calendar from "./Calendar"
import Crayon from "./Crayon"
const FirstDay = () =>{
    return (
        <div>
            <Name />
            <Grade />
            <div className="row1">
                <Age />
                <Calendar />
                <Crayon />
            </div>
        </div>
    )
}
export default FirstDay