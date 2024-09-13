import { useState, useEffect, useRef } from 'react';

const Career = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [career, setCareer] = useState("Doctor")
    const ref = useRef();

    const handleClick = () =>{
        setInputbox(!inputbox)
    }
    const handleKeyPressed = e => {
        
        if(e.key==="Enter"){
            if(e.target.value)
                setCareer(e.target.value)
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

    
    return (
        <div className="career ">
            <div className="career-wrapper"  >
                
          I want to be a 
                {
                    inputbox ?
                        <div className="career-input-wrapper">
                            <input ref={ref} type="text" className="career-input" maxLength="10" 
                            onKeyPress={handleKeyPressed} defaultValue={career} />
                        </div>
                        :
                        <div className="career-text" onClick={handleClick}> {career} </div>
            
                }
                
            when i grow up. 
            </div>
        </div>
    )
}
export default Career;