import { useState, useEffect, useRef } from 'react';

const Crayon = ({setFavColor}) =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [crayon, setCrayon] = useState(0)
    let colors = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "PURPLE"]
    const ref = useRef();

    const handleClick = () =>{
        setInputbox(!inputbox)
    }

    const handleChange = e => {
        if(e.target.value){
            setCrayon( e.target.value )
            setFavColor(colors[e.target.value])
        }
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
            <select ref={ref} name="colors" className="color-dropdown" onChange={handleChange} defaultValue={crayon}>
                {/* <option key="x">Select your grade</option> */}
                {
                    colors.map((color, idx)=>{
                        return (
                            <option className="crayon-color" key={idx} value={idx}>{color}</option>
                        )
                    })
                }
            </select>
        )
    }
    
    return (
        <div className="crayon "> 
            {/* <div className="crayon orange"> */}
            <div className={"crayon-bg " + colors[crayon].toLowerCase()}>
                
                {
                    inputbox ?
                        <div className="crayon-text">
                            <ColorDropdown />
                        </div>
                        :
                        <div className="crayon-text" onClick={handleClick}> {colors[crayon]} </div>
            
                }
                
             </div>   

        </div>
    )
}
export default Crayon;