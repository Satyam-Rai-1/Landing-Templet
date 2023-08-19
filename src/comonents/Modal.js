import React from 'react'
import './Modal.css';
export default function Modal() {
  return (
    <>
       
        <div className="container-fluid bg-transparent  text-center custom-modal  ">
            <div type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" className='modal-btn   d-flex justify-content-center items-center'>
                <img src="myimages/eagle.jpg" alt="clip" className='modal-img ' />
            </div>

                {/* Modal   */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                
                    <video  autoPlay muted controls>
                        <source src='myimages/v5.mp4' type="video/mp4"/>
                    </video>
                
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
