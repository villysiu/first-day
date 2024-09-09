import { useState, useEffect, useRef } from 'react';

const Calendar = () =>{

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        const [calendar, showCalendar ]  = useState(false)
       let today =  new Date()

        const [year, setYear] = useState(today.getFullYear())
        const [date, setDate] = useState(today.getDate())
        const [month, setMonth] = useState(today.getMonth())

        const ref = useRef()
        
        const handleClick = (e) =>{
            showCalendar(true)
            console.log("in the handleClick")
        }
        const handleChange = e =>{
            const regexp = /(\d{4})-(\d{2})-(\d{2})/g
            let arr = [...e.target.value.matchAll(regexp)]

            setYear(arr[0][1])
            setMonth(parseInt(arr[0][2])-1)
            setDate(arr[0][3])

            showCalendar(false)

        }
        useEffect(()=>{
            const handleClickOutside = e => {
                if (ref.current && !ref.current.contains(e.target)) {
                    showCalendar(false)
                }
              }
              
              document.addEventListener("mousedown", handleClickOutside);
              return () => {
                document.removeEventListener("mousedown", handleClickOutside);
              };
        }, [])


        
        return (

            <div className="date roboto-medium" >
                {
                    calendar ? 

                    <input type="date" className="date-input" ref={ref} onChange={handleChange} 
                        defaultValue={`${year}-${(month+1)<10? "0" + (month+1) : (month+1) }-${(date)<10? "0" + (date) : (date) }`}
                    />
                    :
                    <div className="date-text"  onClick={handleClick}>
                        <div className="date-m">{months[month]}</div>
                        <div className="date-d">{date}</div>
                        <div className="date-y">{year}</div>
                    </div>
                    
                }
          
            </div>
            
        )
}
export default Calendar