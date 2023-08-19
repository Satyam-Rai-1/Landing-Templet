import React from 'react';
import './Navbar.css';



function Navbar() {


  
  return (
    <>
    <div className="container-fluid p-0 bg-transparent pb-5">
      <div className="header pb-5">
        <nav class=" container navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="container-fluid">
            <a class="navbar-brand" href=""><img src="myimages/mickey-mouse.jpg" alt="mouse" width={50} /></a>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
              <form class="d-flex ms-auto  ">
                <button class="btn text-light fw-bold " type="submit" >Sign In</button>
                <button class="btn btn-primary fw-bold ms-3" type="submit " >Sign Up</button>
                
              </form>
            </div>
          </div>
        </nav>
      </div>
        
        <div className="container-fluid  text-center text-light  ">
          <h1 className='pt-3 ' >Landing Templet for Startups</h1>
          <p className='pt-3 fs-4 w-50 mx-auto'>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
          <div className="buttons pt-4">
            <button className='btn btn-primary py-2 px-5 fs-5 sec-button '>Click Me</button>
            <button className='btn btn-secondary ms-3 py-2 px-5 fs-5 sec-button'>Learn More</button>
    
          </div>
        </div>
    </div>
      
    </>
  )
  
}

export default Navbar
