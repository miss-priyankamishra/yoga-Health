import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./main.css"
import About from './About'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Events from './Events'
import Client from './Client'
import Classes from './Classes'
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className='container-fluid bg-light'>
        <div className='home-header'>
          <div id="carouselExampleDark" class="carousel  carousel-dark slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            
            </div>
            <div class="carousel-inner home-header">
              <div class="carousel-item active" data-bs-interval="100">
                {/* <div className='headetext'><p className='text-white'>Welcome our wellbeing</p> <h4 className='animationheader'>keep refresh and strong your body.....</h4 ></div> */}
                <section>
	<div class="content">
		<h4> Live like an active</h4>
    <h4> Live like an active</h4>
	</div>
</section>       
              </div>
              <img src="..\images\yoga-header.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>

              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="../images/header2.png" class="d-block w-100" alt="333" />
                <div class="carousel-caption d-none d-md-block">
                <section>
	<div class="content">
		<h4>Young iving for an  active Lifestyle</h4>
    <h4>Young iving for an  active Lifestyle</h4>
	</div>
</section>
                </div>
              </div>
             
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <h1 className='Ourclassestext'>About</h1>
        <div className='row mt-4'>

          <div className='col-6 text-start'><h4> Our Intro </h4>
            <p>It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being.
               Although classical yoga also includes other elements, yoga as practiced in the United States typically emphasizes physical postures (asanas), breathing techniques (pranayama), and meditation (dyana).</p>
               <Link to="/About" style={{ color: "black" }}><button className='readmoreoption'>Read for more</button></Link>
           </div>

          <div className='col-6 anoutimages'><img src='..\images\yoga-poses-to-relieve-stress.webp'></img></div>
        </div>
      </div>
       <div className='container-fluid bg-body-secondary mt-5  p-3'>
        <div className='container mt-5 p-4'>
        <h3 className='Ourclassestext'>Our Classes</h3>
        <p>Hatha yoga is always recommended for beginner yogis as it's considered a gentler form of yoga. It is, traditionally, a slower-moving class where you hold each pose  for a few breaths while maintaining a focus on improving posture.03</p>
       
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100 OurClasses
">
  <div className='imageshover'>

   <img src="../images/OurClassesfirst.jpg" class="card-img-top" alt="..."/>
   </div>
    
      <div class="card-body">
        <h5 >Yoga For Climbers</h5>
       
      </div>
      <div class="card-footer d-flex ">
        <small  className='text-body-secondary'>Sathi Bhuiyan</small>
        <small  className='text-body-secondary'> 10.00Am-05:00Pm</small>
     
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses ">
 
      <img src="../images/OurClassessecond.webp" class="card-img-top" alt="..."/>
     
      <div class="card-body">
        <h5 class="card-title">Yoga For Climbers</h5>
       
      </div>
    
      <div class="card-footer d-flex ">
        <small  className='text-body-secondary'>Sathi Bhuiyan</small>
        <small  className='text-body-secondary'>10.00Am-05:00Pm</small>
     
      </div>
    
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/OurClassesthird.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">seated forward Bend</h5>
       
      </div>
      <div class="card-footer d-flex ">
        <small  className='text-body-secondary'>Sathi Bhuiyan</small>
        <small  className='text-body-secondary'>10.00Am-05:00Pm</small>
     
      </div>
    </div>
  </div>
</div>
<button className="viwemoreclass mb-5 mt-5 b-3">View All Classes</button>
</div>
       </div>
{/* <Classes/> */}

       <div className='container mt-5'>
        <h2 className='pb-5 Ourclassestext'> Class Schedule</h2>
        <table class="table table-bordered table table-sm">
  <thead>
    <tr>
      <th scope="col" className='p-4'>Time</th>
      <th scope="col "className='p-4'>Saturday</th>
      <th scope="col "className='p-4'>Sunday</th>
      <th scope="col "className='p-4'>Monday</th>
      <th scope="col "className='p-4'>Tuesday</th>
      <th scope="col "className='p-4'>Wednesday</th>
      <th scope="col "className='p-4'>Thursday</th>
      <th scope="col "className='p-4'>Friday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className='p-5 '>1</th>
      <td className='bg-success  bg-opacity-25'>Yoga For Climbers
Sathi Bhuiyan

8.00 Am-10.00Am</td>
      <td >Otto</td>
      <td  className='bg-primary bg-gradient bg-opacity-25' >@mdo</td>
      <td>Mark</td>
      <td   className='bg-warning bg-gradient bg-opacity-25'>Otto</td>
      <td>@mdo</td>
      <td  className='bg-success bg-gradient bg-opacity-25'>@mdo</td>
    </tr>
    <tr>
      <th scope="row" className='p-5'>2</th>
      <td >Jacob</td>
      <td  className='bg-warning  bg-opacity-25'>Thornton</td>
      <td>@fat</td>
      <td className='bg-success bg-gradient bg-opacity-25'>Mark</td>
      <td>Otto</td>
      <td  className='bg-danger bg-gradient bg-opacity-25'>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row" className='p-5'>3</th>
      <td  className='bg-dark bg-gradient  bg-opacity-25' >Larry the Bird</td>
      <td >@twitter</td>
      <td className='bg-danger bg-gradient  bg-opacity-25'> Mark</td>
      <td>Otto</td>
      <td  className='bg-primary bg-gradient bg-opacity-25'>@mdo</td>
      <td>@mdo</td>
      <td  className='bg-dark bg-gradient bg-opacity-25'>Thornton</td>
    </tr>
  </tbody>
</table>
       </div>
       <div className='container-fluid bg-body-secondary mt-5  p-3'>
        <div className='container mt-5 p-5'>
        <h3 className='Ourclassestext' >Our Trainer</h3>
        <p>fitness and wellness professional who leads group classes in yoga. They teach students how to perform the various stretching poses, practice meditation and promote mindfulness in addition to overall wellbeing.</p>
       
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100 OurClasses
">
      <img src="../images/trainerfirst.jpg" class="card-img-top" alt="..."/>
   
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/treainersecond.jpeg" class="card-img-top" alt="..."/>
      
    
    
    
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/treanerthir.jpeg" class="card-img-top" alt="..."/>
      
    
    </div>
  </div>
</div>

</div>

       </div>
       <div className='container-fluid mt-4  p-3'>
        <div className='container mt-4 p-5'>
        <h3 className='Ourclassestext'>Our Gallery</h3>
       
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100 OurClasses
">
      <img src="../images/OurGallerysecond.jpg" class="card-img-top" alt="..."/>
   
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/OurGallerythird.jpg" class="card-img-top" alt="..."/>
      
    
    
    
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/OurGalleryfour.webp" class="card-img-top" alt="..."/>
      
    
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/OurGalleryfive.webp" class="card-img-top" alt="..."/>
      
    
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/OurGallerysix.jpg" class="card-img-top" alt="..."/>
      
    
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/OurGalleryseven.jpg" class="card-img-top" alt="..."/>
      
    
    </div>
  </div>
</div>

</div>

       </div>

      <Events/>

     
       <Client/>
  

    </div>
  )
}
