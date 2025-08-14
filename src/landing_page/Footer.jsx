import React from 'react'


function Footer() {
    return (
      <footer style={{backgroundColor:"rgb(250, 250, 250)"}}>
        <div className="container border-top mt-5" >
           <div className="row mt-5">
             <div className="col">
              <img src="media/images/logo.svg" style={{width:"50%"}} />
              <p>&copy; 2015-2026, Not Zero Broking Ltd. All rights reserved.</p>
             </div>
             <div className="col">
              <p>Company</p>
                 <a href='' className='text-muted text-decoration-none'>About </a> <br/>
                 <a href='' className=' text-muted text-decoration-none'>Products</a> <br/>
                 <a href='' className='text-muted text-decoration-none'>Pricing</a > <br/>
                 <a href='' className='text-muted text-decoration-none'>Referrals/Programme</a> <br/>
                 <a href='' className='text-muted text-decoration-none'>Carrers</a> <br/>
                 <a href='' className='text-muted text-decoration-none'>Zero,Tech</a> <br/>
                 <a href='' className='text-muted text-decoration-none'>Press & Media</a> <br/>
                 <a href='' className='text-muted text-decoration-none'>Zero Cares(CR)</a> <br/>
             </div>

             <div className="col">
              <p>Support</p>
                 <a href='' className='text-muted text-decoration-none'>Contacts </a> <br/>
                 <a href='' className='text-muted text-decoration-none'>Support Portals</a> <br/>
                 <a href='' className='text-muted text-decoration-none'>Z-Connect blog</a > <br/>
                 <a href='' className='text-muted text-decoration-none'>List of charges</a> <br/>
                 <a href='' className='text-muted text-decoration-none'>Downloads & resources</a> <br/>
             </div>

             <div className="col">
              <p>Account</p>
                <a href='' className='text-muted text-decoration-none'>Open an account</a> <br/>
                 <a href='' className='text-muted text-decoration-none'>Products</a> <br/>
                 <a href='' className='text-muted text-decoration-none'>Pricing</a > <br/>
             </div>
           </div>


           <div className='mt-5 text-small text-muted' style={{fontSize: "13px"}}>
           <p>
                Zero Broking Pvt. Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ0000000000
                CDSL/NSDL: Depository services through Zero Broking Pvt. Ltd. – SEBI Registration no.: IN-DP
                Commodity Trading through Zero Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ0000000000
            </p>
            <p>
                Registered Address: Zero Broking Pvt. Ltd., [Your Office Address Here]
                For any complaints pertaining to securities broking please write to complaints@zerobroking.com, for DP related issues write to dp@zerobroking.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
            </p>
            <p>
                Prevent unauthorised transactions in your account:
                Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.
                KYC is a one-time exercise while dealing in securities markets – once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
              </p>
              <p>
                Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment, the funds will remain in your bank account.
              </p>
           </div>
        </div>
        </footer>
      );
}

export default Footer;