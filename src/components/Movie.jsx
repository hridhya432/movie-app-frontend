import React from 'react'
import Delete from './Delete'
import Navi from './Navi'

const Movie = () => {
  return (
    <div>
<Delete/>


     <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" />


                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Movie Id</label>
<input type="text" className="form-control" />

</div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                   <label htmlFor="" className="form-label">Release Date</label>
                    <input type="date" name="" id="" className="form-control" />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form label">Language</label>
                    <select name="" id="" className="form-control">
                        <option value="">Malayalam</option>
                        <option value="">Hindi</option>
                        <option value="">Thamil</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form label">Actor Name</label>
                    <input type="text" className="form-control" />

                </div>
                   
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form label">Actress Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Director Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Producer Name</label>
                    <input type="text" className="form-control" />
                
                    
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button className="btn btn-success">Submit</button>
                   </div>
            </div>

            </div>
        </div>
     </div>
    </div>
  )
}

export default Movie