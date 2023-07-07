import React from 'react'
import "./main.css"
import Client from './Client'

export default function Contect() {
  return (
    <div>
     <div className='container-fluid '>
            <div className='header mb-4'>
                <img src="../images/yoga-header.png">
                </img>
               
            </div>
          
            <h1 className='Ourclassestext'>Contact us</h1>
        <div className='row mt-4 p-5'>
       
          <div className='col-5 text-start'>
            <p><form>
            <div class="mb-3 d-flex ">
 
    <input type="email" class="form-control m-1" id="exampleInputEmail1" placeholder='first Name' aria-describedby="emailHelp"/>
    <input type="email" class="form-control m-1" id="exampleInputEmail1" placeholder='Last Name' aria-describedby="emailHelp"/>
 
  </div>
  <div class="mb-3 d-flex ">
 
 <input type="number" class="form-control m-1" id="exampleInputEmail1" placeholder='Contact No' aria-describedby="emailHelp"/>
 <input type="text" class="form-control m-1" id="exampleInputEmail1" placeholder='city' aria-describedby="emailHelp"/>

</div>

  <div class="mb-3 m-1">
    <input type="email" class="form-control" placeholder='Email @gamil.com' id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>

  <div class="mb-1 mt-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
</div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class=" sumitebtn">Submit</button>
</form>
                we are always with you our first priority your health then anything else physical postures (asanas), breathing techniques (pranayama), and meditation (dyana).</p>
           </div>

          <div className='col-6 anoutimages  text-end'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14023.043996360984!2d77.18302375!3d28.5168376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1688130730668!5m2!1sen!2sin" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"style={{width:"100%" ,height:"400px"}} ></iframe></div>
        </div>
        </div>
    </div>
  )
}
