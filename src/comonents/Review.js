import React from 'react'

const reviewdata = [
    {
        img : <img src="myimages/review-2.jpg" alt="1" width={50} className='rounded-pill'  />,
        text:"— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before."
    },
    {
        img : <img src="myimages/review-1.jpg" alt="1"width={50}className='rounded-pill'  />,
        text:"— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before."
    },
    {
        img : <img src="myimages/review-2.jpg" alt="1" width={50} className='rounded-pill' />,
        text:"— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before."
    }
    
]

export default function Review() {
  return (
    <>
      <div className="container-fluid bg-transparent">
        <div className="container-fluid w-75 ">
            <div className="row">
                {reviewdata.map((r)=>{
                    return(
                    
                    <div className="col-12 col-md-6 col-lg-4 ">
                    <div class="card shadow bg-transparent text-light px-4 py-3 d-flex justify-content-center items-center" >
                        <div class="card-body ">
                            <h5 class="card-title  ">{r.img}</h5>
                            
                            <p class="card-text pt-2">{r.text}</p>
                            <hr />
                            <a href="#" class="card-link text-decoration-none text-dark">Card link</a>
                            <a href="#" class="card-link text-decoration-none">Another link</a>
                        </div>
                        </div>
                    </div>

                    )
                })}
                
            </div>

        </div>
      </div>
    </>
  )
}
