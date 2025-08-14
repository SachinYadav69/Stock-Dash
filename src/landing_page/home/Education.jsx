import moduleName from 'module'


function Education() {
    return (  
        <div className="container mt-5">
          <div className="row">
            <div className="col-6 p-5">
              <img src="media/images/education.svg" style={{width:"80%"}}/>
            </div>

            <div className="col-6 p-5 mt-3">
              <h1 className='fs-3'>Free and Open market Education</h1>
              <p className='mb-4'>Varsity, the largest online stocks market education book in the world covering everthing from the basics to advanced trading.</p>
               <a href="" style={{textDecoration:"none"}}>Versity<i class="fa-solid fa-arrow-right-long"></i></a>

               <p className='mt-4'>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
               <a href="" style={{textDecoration:"none"}}>Trading Q&A<i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
        </div>
    );
}

export default Education;
