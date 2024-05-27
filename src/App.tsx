
import './App.css'
import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <div className="app">
<Routes> 

 

      <Route path="/" element={ <HomePage/>}/>   
      <Route path="/favoritePage/:id" element={ <FavoritePage/>}/>   


 
  </Routes>

    </div>
  


)
}

export default App
