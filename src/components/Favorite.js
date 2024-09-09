import { useState, useEffect, useRef } from 'react';

const Favorite = () =>{
    const [inputbox, setInputbox ]  = useState(false)
    const [favorites, setFavorites] = useState(["Purple", "ice cream", "cat", "TW beef", "bunny"])

    const favRef = useRef()
    const handleClick = () =>{
        setInputbox(!inputbox)
    }
    const handleKeyPressed = e => {
        if(e.key==="Enter"){

            setInputbox(!inputbox)
        }
    }
    const handleChange = e =>{
        let val = e.target.value
        let idx = parseInt(e.target.name)

        setFavorites([...favorites.slice(0, idx), val, ...favorites.slice(idx+1)])
    }
    useEffect(()=>{
        const outsideFav = e =>{
            if(favRef.current && !favRef.current.contains(e.target))
                setInputbox(false)
        }
        document.addEventListener("mousedown", outsideFav)
        return ()=>document.removeEventListener("mousedown", outsideFav)
            
    },[])
    return (
        <div className="favorite itim-regular">
            💗 I Love 💗
            

            <div className="fav-wrapper">
            { inputbox ? 
                <div ref={favRef} className="fav-input_wrapper">
                {
                    favorites.map((fav, idx)=>{
                        return (
                            <input type="text" key={idx} name={idx} className="fav-input" maxLength="20" value={fav}
                            onKeyPress={handleKeyPressed} onChange={handleChange}
                            />
                        )
                    })
                    
                } 
                    
                </div>
                :
                
                    <div className="fav-list kalam-regular" onClick={handleClick} >
                    {
                        favorites.map((fav, idx)=>{
                            return(
                                <div key={idx} className="fav-li">{fav}</div>
                            )})
                        
                    }
                        
                    </div>
                
            }
            </div>
        </div>
    )
}
export default Favorite;