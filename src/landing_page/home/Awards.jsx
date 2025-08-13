import React from 'react'


function Awards() {
    return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-6 p-5">
              <img src="media/images/largestBroker.svg" alt="" />
            </div>

            <div className="col-6 p-5 mt-3">
              <h1>Largest stock broker in India</h1>
              <p className='mb-5'>“One of the world’s largest stock investment platforms — trusted by over 10% of global investors. A seamless online platform for trading stocks, derivatives, mutual funds, and more."</p>


              <div className="row">
                <div className="col-6 mb-2">
                   <ul>
                     <li><p>Future and Options</p></li>
                     <li><p>Commodity Derivatives</p></li>
                     <li><p>Currency Derivatives</p></li>
                    </ul>
                </div>

                <div className="col-6 mb-2">
                  <ul>
                     <li><p>Stocks and IPOs</p></li>
                     <li><p>Direct Mutual Funds</p></li>
                     <li><p>Bonds and Govt. Securities</p></li>
                    </ul>
                </div>
                <img src="media/images/pressLogos.png" style={{width:"90%"}}/>
              </div>

            </div>
          </div>
        </div>
      );
}

export default Awards;