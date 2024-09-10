import { useState, useRef, useEffect } from 'react';
import teacher_m from '../images/teacher_m.png';

const Teacher = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [teacher, setTeacher] = useState("Lui")
    const [title, setTitle] = useState("Mr")
    const titles = ["Mr", "Mrs", "Miss", "Ms" ]
    const teacherRef = useRef()

    const handleClick = () =>{
        setInputbox(!inputbox)
    }
    const handleKeyPressed = e => {
        
        if(e.key==="Enter"){
            if(e.target.value)
                setTeacher(e.target.value)
            setInputbox(!inputbox)
        }
    }
    const handleChange = e => {
        setTitle( e.target.value )
    }
    useEffect(()=>{
        const clickOutside = e => {
            if(teacherRef.current && !teacherRef.current.contains(e.target))
                setInputbox(false)
        }
        document.addEventListener("mousedown", clickOutside)
        return ()=>document.removeEventListener("mousedown", clickOutside)
    }, [])

    const TitleDropdown = (e) => {
        
        return (
            <select name="titles" className="title-dropdown" onChange={handleChange} defaultValue={title}>
            {
                titles.map((title, idx)=>{
                    return (
                        <option className="title-dd-li" key={idx} value={title}>
                            {title}
                        </option>
                    )
                })
            }
            </select>
        )
    }
    
    return (
                <div className={title==="Mr" ? "teacher m" : "teacher f"} >
                    {
                        inputbox ?

                        <div ref={teacherRef} className="teacher-dd-wrapper">
                            <TitleDropdown />
                            <input ref={teacherRef} type="text" className="teacher-input-box" maxLength="15" 
                            onKeyPress={handleKeyPressed}
                            defaultValue={teacher} />
                        </div>
                        :
                        <div className="teacher-text" onClick={handleClick}>
                            <span>{title}.</span>
                            {" "}
                            <span >{teacher}</span>
                        </div>
                    }
                    
                </div>
            
        
    
    )
}
export default Teacher;