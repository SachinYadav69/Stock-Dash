import React from 'react'
function Stats() {
    return ( 
        <div className="container p-3">
            <div className="row p-5">
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'> Thats why 2 Cr+ cutomers trust us with 4 Million of revenue worth of equity investments.</p>

                    <h2 className='fs-4'>No Spams or gimmicks</h2>
                    <p className='text-muted'> No spam. No gimmicks. Just a trusted platform where you can invest with confidence, knowing every move is transparent and built for your success.</p>

                    <h2 className='fs-4'>The Eco-Universe</h2>
                    <p className='text-muted'> The eco-universe of investing — everything you need, from market insights to seamless trades, all in one trusted platform.</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'> Helping you do better with money through smart tools, insights, and opportunities.</p>

                </div>


                <div className='col-6 p-5'>
                    <img src="media/images/ecosystem.png" style={{width:"90%"}} />
                </div>


                <div className='text-center'>
                    <a href="" className='mx-5' style={{textDecoration:"none"}}>Explore our Products <i class="fa-solid fa-arrow-right-long"></i></a>
                    
                    <a href="" className='mx-5' style={{textDecoration:"none"}}>Try Kite <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Stats;