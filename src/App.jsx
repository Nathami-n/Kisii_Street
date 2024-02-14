import {Header, Foods} from './components'
import FoodContextProvider from './utils/foodsContext'

const App = () => {
  return (
    <FoodContextProvider>
      <Header/>
    </FoodContextProvider>
  )
}

export default App