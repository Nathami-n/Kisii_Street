import { createContext, useState} from "react";

const foodContext = createContext();

const FoodContextProvider = ({children}) => { 
    const [foods, setFoods] = useState([{name: 'ugali', price:'20'}])
    return (
        <foodContext.Provider value={foods} >
            {children}
        </foodContext.Provider>
    )

}


export default FoodContextProvider