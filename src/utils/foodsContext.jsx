import { createContext, useState, useEffect} from "react";
import {items} from '../utils/foods'

export const foodContext = createContext();

const FoodContextProvider = ({children}) => { 
    useEffect(()=>{
        localStorage.setItem('foods', JSON.stringify(items))
    },[])
    const [foods, setFoods] = useState(JSON.parse(localStorage.getItem('foods'))|| [])
    return (
        <foodContext.Provider value={{foods, setFoods}} >
            {children}
        </foodContext.Provider>
    )

}


export default FoodContextProvider