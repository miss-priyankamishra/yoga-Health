import React from 'react'
import Client from './Client'
import Footer from './Footer'

export default function Classes() {
  return (
    <div>
          <div className='container-fluid '>
            <div className='header'>
                <img src="../images/yoga-header.png">
                </img>
               
            </div>
            <div className='container-fluid bg-body-secondary mt-5  p-3'>
        <div className='mt-5 p-4'>
        <h3 className='Ourclassestext'>Our Classes</h3>
        <p>Hatha yoga is always recommended for beginner yogis as it's considered a gentler form of yoga. It is, traditionally, a slower-moving class where you hold each pose  for a few breaths while maintaining a focus on improving posture.03</p>
       <div className='container'>
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
</div>
<button className="viwemoreclass mb-5 mt-5 b-3">View All Classes</button>
</div>
       </div>
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
       <Client/>
      
      </div>
    </div>
  )
}
