import { useState, useRef, useEffect } from 'react';

const Age = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [age, setAge] = useState(1)
    const [birthdate, setBirthdate] = useState("10/15/2018")
    const ageRef = useRef();

    const handleClick = () =>{
        setInputbox(true)
    }
    const handleKeyPressed = e => {
        console.log(e.target.value)
        if(e.key==="Enter"){
            if(e.target.value){
                setBirthdate(e.target.value)
                

                let today =  new Date()
                let birth = new Date(e.target.value)
                console.log(today - birth)
                setAge(Math.floor((today - birth) / (1000*60*60*24*365)))
            }
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
            
            { inputbox ? 
                
                    // <input ref={ageRef} type="number" className="age-input" maxLength="2" 
                    // onKeyPress={handleKeyPressed} 
                    // defaultValue={age} />
                    <input ref={ageRef} type="text" className="birthday-input" maxLength="10" 
                    defaultValue={birthdate} placeholder="mm/dd/yyyy"
                    onKeyPress={handleKeyPressed}
                    />
                
                :
                
                    <div className="age-text" onClick={handleClick} >
                        {age}
                    </div>
            }
        </div>
    )
}
export default Age;