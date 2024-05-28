
import './App.css'
import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'
import { Route, Routes } from 'react-router-dom'
import PlanetDetails from './components/PlanetDetails'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

const [planets, setPlanets]= useState<Planet[]>([]);
const [key, setKey]=useState('');

const getApiKey = async ()=>{
  try{
      const response= await axios.post('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys')
      const apiKey= response.data.key;
      console.log(apiKey)
      setKey(apiKey);
}catch(error){
    console.error(error);
  
}
};


const getPlanetData = async (key: string) => {
  try{
    const response= await  axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
    headers : { 'x-zocom' : key}
});
setPlanets(response.data);
console.log(response.data)
  } catch (error){
  console.error(error);
}
};

useEffect(()=>{
  const dataInitializer = async () => {
    await getApiKey();
  };
  dataInitializer();
}, []);

useEffect(()=>{
  if(key){
    getPlanetData(key);
  }
},
[key]);

  return (
    <div className="app">
<Routes> 

 

      <Route path="/" element={ <HomePage/>}/>   
      <Route path="/favoritePage/:id" element={ <FavoritePage/>}/>   
      <Route path="/planetDetails/:id" element={ <PlanetDetails/>}/>
 
  </Routes>

    </div>
  


);
}

export default App
