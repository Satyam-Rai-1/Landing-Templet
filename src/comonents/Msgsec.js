import React from 'react'
import './Navbar.css'
export default function Msgsec() {
  return (
    <>
      <div className="container-fluid bg-transparent py-5 text-white">
        <div className="container-fluid bg-primary p-5 w-75">
           <div className="row">
            <div className="col-12 col-xl-6">
                <div className="text-sec  ">
                <h1>Stay in the loop</h1>
                <p>Join our newsletter to get top news before anyone else.</p>
                </div>
            </div>
            <div className="col-12 col-xl-6">
                <div className=' email-sec '>
                    <input type="email" className='' placeholder='Your best Email...' />
                    <input type="button" className=' button' value="Subscribe" />
                </div>
            </div>
           </div>



        </div>
      </div>
    </>
  )
}
