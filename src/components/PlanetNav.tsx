import   './styles/planetNav.css'

function PlanetNav() {
  return (
   <nav className="planetNav">

    <div className="navbuttons">
    <ul className="buttons">
        <li> Home page </li>
        <li>Favorite Planets </li>
      </ul>
    </div>
     <h1 className="nameDsiplayer">Solaris Space Center </h1>

<div className="planetWraper">
   <div className="solen"></div>
      <div className="merkurius"></div>
      <div className="venus"> </div>
      <div className="jorden">  </div>
      <div className="mars">  </div>
      <div className="jupiter">  </div>
      <div className="ringen"></div>
      <div className="saturnus"> </div>
      <div className="uranus">  </div>
      <div className="neptunus">  </div>
</div>
   </nav>
  )
}

export default PlanetNav
