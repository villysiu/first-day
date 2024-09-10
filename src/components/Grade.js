import { useState } from 'react';

const Grade = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [grade, setGrade] = useState("Kindergarten")

    const grades = ["Kindergarten", "First Grade", "Second Grade", "Third Grade", "Fourth Grade", "Fifth Grade"]
    const handleClick = () =>{
        setInputbox(!inputbox)
    }
    const handleChange = e => {
        const selected_grade = e.target.value
        setGrade( selected_grade === "k" ?  grades[0] : grades[selected_grade] )
        setInputbox(!inputbox)
    }
    const GradeDropdown = (e) => {
        
        return (
            <select name="grades" className="grade-dropdown" onChange={handleChange}>
                <option className="opy" key="x">Select your grade</option>
                {
                    grades.map((grade, idx)=>{
                        if(idx === 0)
                            return (<option className="opy" key="0" value="k">Kindergarten</option>)
                        return (
                            <option className="opy" key={idx} value={idx}>{grade}</option>
                        )
                    })
                }
            </select>
        )
    }
    return (
        
        <div className="grade itim-regular">
            
            <div className="grade-text-wrapper">
                First Day of
            { inputbox === true ? 
                <GradeDropdown />
                :
                <div className="grade-text anton-regular multicolor-text" onClick={handleClick} >{grade}</div>
            }
            </div>

        </div>
    )
}
export default Grade;