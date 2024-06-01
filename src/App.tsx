
import './App.css'
import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PlanetType from './models/planetTyp'
import PlanetPage from './pages/PlanetPage'
import PlanetNav from './components/PlanetNav'


function App() {

const [planets, setPlanets]= useState<PlanetType[]>([]);
const [key, setKey]=useState('');
const [planetFavoList, setPlanetFavoList]=useState<PlanetType[]>([]);

const getApiKey = async ()=>{
  try{
      const response= await axios.post('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys')
      
      const apiKey= response.data.key
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
    setPlanets(response.data.bodies);
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

const togglePlanetFavoList=(planet:PlanetType)=>{
  setPlanetFavoList(prevList=>{
    const isFavorite=prevList.some(p=>p.id === planet.id);
    if(isFavorite){
      return prevList.filter(p=>p.id !== planet.id)
    }else{
      return[...prevList, planet]
    }
  })
}

  return (
    
    <div className="app">
      <PlanetNav/>
<Routes> 

 

      <Route path="/" element={<HomePage planets={planets} planetFavoList={planetFavoList} togglePlanetFavoList={togglePlanetFavoList}/>}/>   
      
      <Route path="/PlanetDetails/:planetId" element={ <PlanetPage planets={planets} planetFavoList={planetFavoList} togglePlanetFavoList={togglePlanetFavoList}
                                                             />}/>
      <Route path="/favoritePage" element={ <FavoritePage  planetFavoList={planetFavoList}/>}/>   
  </Routes>

    </div>
  


);
}

export default App
