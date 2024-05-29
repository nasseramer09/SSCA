import PlanetType from '../models/planetTyp'
import   './styles/planetNav.css'
type PlanetNavProps={
  planet:PlanetType[];
}
function PlanetNav({planet}:PlanetNavProps) {

  return (


   <nav className="planetNav">
    <div className='favWraper'> 

      <i className='material-icons'>favorite</i> 
      <span className='favSpan'>Favorite Planets  </span>  
      </div>


   </nav>
  )
}

export default PlanetNav
