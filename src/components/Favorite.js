import { useState } from 'react';

const Favorite = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [age, setAge] = useState(10)

    const handleClick = () =>{
        setInputbox(!inputbox)
    }
    const handleKeyPressed = e => {
        
        if(e.key==="Enter"){

            setAge(e.target.value)
            setInputbox(!inputbox)
        }
    }
    
    return (
        <div className="age itim-regular">
            💗 I Love 💗
            { inputbox ? 
                <div className="age-input_wrapper">
                    <input type="number" className="age-input" maxLength="2" 
                    onKeyPress={handleKeyPressed} />
                </div>
                :
                <div className="age-text" onClick={handleClick} >
                    {age}
                </div>
            }
        </div>
    )
}
export default Favorite;