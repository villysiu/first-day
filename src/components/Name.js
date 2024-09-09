import { useState, useEffect, useRef } from 'react';

const Name = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [name, setName] = useState("Danielle")
    const ref = useRef();

    const handleClick = () =>{
        setInputbox(!inputbox)
    }
    const handleKeyPressed = e => {
        
        if(e.key==="Enter"){
            setName(e.target.value)
            setInputbox(!inputbox)
        }
    }
    useEffect(()=>{
        const clickOutside = e =>{
            
            if(ref.current && !ref.current.contains(e.target)) {
                setInputbox(false)
            }
        }
        document.addEventListener("mousedown", clickOutside);
        return () => {
        document.removeEventListener("mousedown", clickOutside);
        };
    }, [])
    if(inputbox){
        return (
            <div className="name">
                <input ref={ref} type="text" className="name-input" maxLength="10" 
                onKeyPress={handleKeyPressed} defaultValue={name} />
            </div>
        )
    }
    
    return (
        <div className="name lilita-one-regular">
            <div className="name-text dm-serif-text-regular" onClick={handleClick} >
                {name}'s
            </div>

        </div>
    )
}
export default Name;