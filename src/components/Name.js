import { useState } from 'react';

const Name = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [name, setName] = useState("Danielle")

    const handleClick = () =>{
        setInputbox(!inputbox)
    }
    const handleKeyPressed = e => {
        
        if(e.key==="Enter"){

            setName(e.target.value)
            setInputbox(!inputbox)
        }
    }
    if(inputbox){
        return (
            <div className="name">
                <input type="text" className="name-input" maxLength="10" 
                onKeyPress={handleKeyPressed} />
            </div>
        )
    }
    return (
        <div className="name">
            <div className="name-text dm-serif-text-regular" onClick={handleClick} >{name}'s</div>

        </div>
    )
}
export default Name;