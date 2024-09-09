import { useState, useRef, useEffect } from 'react';

const Age = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [age, setAge] = useState(5)
    const ageRef = useRef();

    const handleClick = () =>{
        setInputbox(true)
    }
    const handleKeyPressed = e => {
        
        if(e.key==="Enter"){

            setAge(e.target.value)
            setInputbox(false)
        }
    }
    useEffect(()=>{
        const clickOutside = e =>{
            if(ageRef.current && !ageRef.current.contains(e.target))
            setInputbox(false)
        }
        document.addEventListener('mousedown', clickOutside)
        return ()=>document.removeEventListener('mousedown', clickOutside)
    }, [])
    
    return (
        <div className="age">
            I am 
            <div  className="age-wrapper">
            { inputbox ? 
                
                    <input ref={ageRef} type="number" className="age-input" maxLength="2" 
                    onKeyPress={handleKeyPressed} />
                // </div>
                :
                // <div className="age-text-wrapper">
                    <div className="age-text" onClick={handleClick} >
                        {age}
                    </div>
                // </div>
            }
            </div>
            
            Years Old
        </div>
    )
}
export default Age;