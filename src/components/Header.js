import React from "react";
import { Link} from 'react-router-dom';
// import Form from "./Form";

console.log("hola");

class Header extends React.Component {
  render() {
    return (
      
        <header>
              <nav>
    <div class="nav-wrapper">
      <h3 className="navTitle">agro<span className="navSubTitle">subex</span></h3>
      <div className="containerLogo">
      <img src="../../favicon.png" alt="logo" className="logo"></img>
      </div>
    
      
      <ul id="nav-mobile" class="right ">
        
        <li><a href="sass.html">Home</a></li>
        <li><Link to="/Products">
          Productos
          </Link></li>
        
        <li>
          <Link to="/Logistic">
          Logística
          </Link>
          </li>
          <li>
        <Link to="/Responsability"> Proveedores
          </Link></li>
          <li>
        
      <li>
          <Link to="/Responsability"> Gestión de residuos
          </Link></li>
          <Link to="/Logistic">
          Agrosubex
          </Link>
          </li>
        
       
      
        
                
              
        
        <li><Link to="/Form">
          Contacto
          </Link></li>
        
      
      </ul>
    </div>
  </nav>
  
  


</header>

      
    );
  }
}

export default Header;
