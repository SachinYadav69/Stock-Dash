import React from 'react'


function Pricing() {
    return ( 
        <div className="container">
             <div className="row">
                <div className="col-4">
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>we pioneered the concept of discount broking and price   transparancy in India. Flat and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}> See Pricing<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>


                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col p-5 border">
                            <h1 className='mb-3'>0Rs</h1>
                            <p>free equity delievery and direct mutual funds</p>
                        </div>
                         <div className='col p-5 border'>
                            <h1 className='mb-3'>20Rs</h1>
                            <p>Intraday and f&O</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
     );
}

export default Pricing;