import React from 'react'
import Client from './Client'
import Footer from './Footer'


export default function Gallery() {
  return (
    <div>
          <div className='container-fluid '>
            <div className='header'>
                <img src="../images/yoga-header.png">
                </img>
              
            </div>
            <div className='mt-4  p-3'>
        <div className=' mt-4 p-5'>
        <h3 className='Ourclassestext pb-4'>Our Gallery</h3>
      
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
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/galleryimages.jpg" class="card-img-top" alt="..."/>
      
    
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/OurGalleryninght.jpg" class="card-img-top" alt="..."/>
      
    
    </div>
  </div>
  <div class="col">
    <div class="card h-100 OurClasses">
      <img src="../images/OurGalleryten.jpg" class="card-img-top" alt="..."/>
      
    
    </div>
  </div>
</div>

</div>

       </div>

       <Client/>
    
      </div>
    </div>
  )
}
