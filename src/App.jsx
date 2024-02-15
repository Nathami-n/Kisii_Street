import {Header, Foods, Footer} from './components'
import FoodContextProvider from './utils/foodsContext'

const App = () => {
  return (
    <FoodContextProvider>
      <Header/>
      <Footer/>
    </FoodContextProvider>
  )
}

export default App