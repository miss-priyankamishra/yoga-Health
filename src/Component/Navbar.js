import React from 'react'
import "./main.css"
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
 
        <nav className=' container-fluid bg-white p-3' style={{position:"fixed" , zIndex:"9999"}}>
         
      
   <ul class="nav justify-content-center">   
     
  <li class="nav-item me-5">
    <Link class="brand active" aria-current="page" to="/"><img src="./images/logofinal.png
    "/></Link>
  </li>
  <li class="nav-items">
    <Link class="nav-link text-secondary" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-secondary" to="/About">About</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-secondary" to="/Classes">Classes</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-secondary" to="/Gallery">Gallery</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-secondary  " to="/Blog">Blog</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-secondary"to="/Contect">Contact</Link>
  </li>

  <div class="float-end navbar-text  ms-5">
<button className=' rounded contactus ' to ="/Contect"> <Link class="nav-link text-secondary"to="/Contect">Contact</Link></button>
  </div>
 
</ul>
 
        </nav>


    </div>
  )
}
