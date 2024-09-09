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

            <div id="date" className="roboto-medium" >
                {
                    calendar ? 

                    <input type="date" id="cal" ref={ref} onChange={handleChange} />
                    :
                    <div id="date-text"  onClick={handleClick}>
                        <div className="date-m">{months[month]}</div>
                        <div className="date-d">{date}</div>
                        <div className="date-y">{year}</div>
                    </div>
                    
                }
          
            </div>
            
        )
}
export default Calendar