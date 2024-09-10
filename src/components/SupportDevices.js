import {useState, useEffect} from 'react';
import FirstDay from "./FirstDay"
const SupportDevices = () =>{
    const [minDeviceWidth, minDeviceHeight] = [453.2, 762.2]
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [supported, setSupported] = useState(window.innerWidth>minDeviceWidth && window.innerHeight>minDeviceHeight)
    useEffect(()=>{
        const handleResize = () => {
            console.log(window.innerWidth, window.innerHeight)
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
            setSupported(window.innerWidth>minDeviceWidth && window.innerHeight>minDeviceHeight)
        }
        window.addEventListener("resize", handleResize)
        return ()=>window.removeEventListener("resize", handleResize)
    },[window.innerWidth, window.innerHeight])
    
    if(!supported){
        return(
            <div> oh no </div>
        )
    }
    return(
        <>
        <FirstDay />
        <div style={{"color": 'red'}}>{width}, {height}</div>
        </>

    )
}
export default SupportDevices