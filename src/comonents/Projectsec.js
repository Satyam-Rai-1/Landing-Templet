import React from 'react'
import Centertext from './Centertext'

export default function Projectsec() {
  return (
    <>
        <div className="container-fluid  bg-transparent  ">
        <hr style={{border:"2px solid #fff9 "}} className='extra-small ' />
        <Centertext/>
            <div className="container-fluid w-75 p-5  ">       
                <div className="row ">
                    <div className="col-12 col-md-12 col-xl-6 text-white">
                            
                            <h5 style={{fontFamily:'cursive' ,color:'blue'}}>More speed. Less spend</h5>
                            <h1>Keep projects on schedule</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>&#9989; Lorem ipsum dolor sit amet.</p>
                            <p>&#9989; Lorem ipsum dolor sit .</p>
                            <p>&#9989; Lorem ipsum dolor </p>
                        


                    </div>
                    <div className="col-12 col-md-12 col-xl-6 proj-img  d-flex justify-content-center items-center">
                        <img src="myimages/proj.webp" alt="proj"  width={'500px'} />
                    </div>
                    
                </div>
            </div>
        </div>
      
    </>
  )
}
