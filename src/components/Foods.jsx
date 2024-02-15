import{FoodCard} from './'
import {foodContext} from '../utils/foodsContext'
import {useContext} from 'react'

const Foods = () => {
  const {foods} = useContext(foodContext)
  console.log(foods)
  return (
    <section className='flex flex-col items-center justify-center mt-4 md:flex-row md:flex-wrap md:mt-7'>
     {foods.map((item, i)=> {
      return(
        
          <FoodCard key={i} item={item}/>
      )
     })}

    </section>
  )
}

export default Foods