import React from 'react'

const carddata = [{
    logo : <img src="myimages/java-script.png" alt="js" width={60} /> ,
    title:'Javascript',
    text:'The href attribute requires a valid value to be accessible.'
},
{
    logo:<img src="myimages/html.png" alt="js" width={60} /> ,
    title:'Html',
    text:'The href attribute requires a valid value to be accessible.'
},
{
    logo:<img src="myimages/java-script.png" alt="js" width={60} /> ,
    title:'Javascript',
    text:'The href attribute requires a valid value to be accessible.'
},
{
    logo:<img src="myimages/html.png" alt="js" width={60} /> ,
    title:'Html',
    text:'The href attribute requires a valid value to be accessible.'
},
{
    logo:<img src="myimages/java-script.png" alt="js" width={60} /> ,
    title:'Javascript',
    text:'The href attribute requires a valid value to be accessible.'
},
{
    logo:<img src="myimages/html.png" alt="js" width={60} /> ,
    title:'Html',
    text:'The href attribute requires a valid value to be accessible.'
}


]

export default function Card() {
    
  return (
    <>
    <div className="container-fluid bg-transparent p-0 ">
        <div className="container-fluid extra-small p-0">
        <div className="row">
            {carddata.map((c)=>{
                return(
                    <div className="col-12 col-md-6 col-xl-4 ">
                    <div class="card p-3  m-2  bg-transparent shadow text-white">
                        <div className="card-title d-flex justify-content-between items-center">
                            <h5 class="card-title">{c.logo}</h5>
                            <h2 class="card-text" style={{
                                color:'#fff8'
                            }}>{c.title}</h2>
                        </div>
                        <div class="card-body">
                           
                            <p  class="card-text" style={{
                                fontFamily:'cursive'
                            }}>{c.text}</p>
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
