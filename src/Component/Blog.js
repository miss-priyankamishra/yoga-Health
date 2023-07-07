import React from 'react'
import Client from './Client'

export default function Blog() {
  return (
    <div>
          <div className='container-fluid '>
            <div className='header'>
                <img src="../images/yoga-header.png">
                </img>
            
            </div>
            <div className='container-fluid  mt-5  p-3'>
        <div className=' mt-5 p-5'>
        <h3 className='Ourclassestext'>Our Blog</h3>
        <p>Yoga is essentially a spiritual discipline based on an extremely subtle Science which focuses on bringing harmony between mind and body.</p>
       
        <div class="row ">
  <div class="col">
  <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4 blogone">
      <img src="../images/blogfirst.webp" class="img-fluid rounded-start w-100 h-100" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Curabitur Ante Justo, Vitae.</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nisl non justo aliquam euismod ut ac orci.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4 ">
      <img src="../images/blogsecond.jpg" class="img-fluid rounded-start w-100 h-100" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Curabitur Ante Justo, Vitae.</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
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
