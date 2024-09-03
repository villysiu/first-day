import { useState } from 'react';

const Age = () =>{
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
            I am 
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
            
            Years Old
        </div>
    )
}
export default Age;