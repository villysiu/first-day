import { useState, useRef, useEffect } from 'react';

const Teacher = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [teacher, setTeacher] = useState("Mr. Lui")
    const teacherRef = useRef()
    const handleClick = () =>{
        setInputbox(!inputbox)
    }
    const handleKeyPressed = e => {
        
        if(e.key==="Enter"){

            setTeacher(e.target.value)
            setInputbox(!inputbox)
        }
    }
    useEffect(()=>{
        const clickOutside = e => {
            if(teacherRef.current && !teacherRef.current.contains(e.target))
                setInputbox(false)
        }
        document.addEventListener("mousedown", clickOutside)
        return ()=>document.removeEventListener("mousedown", clickOutside)
    }, [])
    if(inputbox){
        return (
            <div className="teacher">
                Teacher
                <input ref={teacherRef} type="text" className="teacher-input-box" maxLength="15" 
                onKeyPress={handleKeyPressed}
                defaultValue={teacher} />
            </div>
        )
    }
    return (
        <div className="teacher">
            Teacher
            <div className="teacher-text dm-serif-text-regular" onClick={handleClick} >{teacher}</div>

        </div>
    )
}
export default Teacher;