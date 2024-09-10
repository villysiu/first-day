import { useState, useEffect, useRef } from 'react';

const Crayon = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [crayon, setCrayon] = useState(1)
    let colors = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "PURPLE"]
    const ref = useRef();

    const handleClick = () =>{
        setInputbox(!inputbox)
    }
    const handleKeyPressed = e => {
        
        if(e.key==="Enter"){
            if(e.target.value)
                setCrayon(e.target.value)
            setInputbox(!inputbox)
        }
    }
    const handleChange = e => {
        if(e.target.value)
            setCrayon( e.target.value )
        setInputbox(!inputbox)
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

    const ColorDropdown = () =>{
        return (
            <select name="colors" className="color-dropdown" onChange={handleChange} defaultValue={crayon}>
                {/* <option key="x">Select your grade</option> */}
                {
                    colors.map((color, idx)=>{
                        return (
                            <option className="opy" key={idx} value={idx}>{color}</option>
                        )
                    })
                }
            </select>
        )
    }
    
    return (
        <div className={"crayon " + colors[crayon].toLowerCase()}>
        {/* <div className="crayon "> */}
           
            
                {
                    inputbox ?
                        <div className="crayon-input-wrapper">
                            <ColorDropdown />
                        </div>
                        :
                        <div className="crayon-text" onClick={handleClick}> {colors[crayon]} </div>
            
                }
                
     

        </div>
    )
}
export default Crayon;