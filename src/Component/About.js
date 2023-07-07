import React from 'react'
import "./main.css"
import Events from './Events'
import Client from './Client'
import Footer from './Footer'

export default function About() {
  return (
    <div>
          <div className='container-fluid '>
            <div className='header mb-4'>
                <img src="../images/yoga-header.png">
                </img>
               
            </div>
          
            <h1 className='Ourclassestext'>About</h1>
        <div className='row mt-4'>

          <div className='col-5 text-start'><h2>Our Introducation </h2>
            <p>It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being.
               Although classical yoga also includes other elements, yoga as practiced in the United States typically emphasizes physical postures (asanas), breathing techniques (pranayama), and meditation (dyana).</p>
           </div>

          <div className='col-6 anoutimages '><img src='..\images\yoga-poses-to-relieve-stress.webp'></img></div>
        </div>
        </div>
        <Events/>
        <Client/>
     
      </div>
  
  )
}
