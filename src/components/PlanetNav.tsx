import { Link } from 'react-router-dom';
import   './styles/planetNav.css'

function PlanetNav() {

  return (


   <nav className="planetNav">
    
      <Link className={"favLink"} to={"FavoritePage"}>
       <i className='material-icons'>favorite</i> 
        <span className='favSpan'>Favorite Planets  </span>
      </Link>
       
       
     
      
     


   </nav>
  )
}

export default PlanetNav
