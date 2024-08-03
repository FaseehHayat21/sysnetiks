import React from 'react'
import signupimageb from "../../assets/login.jpg"
import "./SignUp.css"
export default function SignUp() {
  return (
    <>
          <div className="signup">
            <div className='signup-image '>
                <img className='img-signup img-fluid' src={signupimageb} alt="" />
            </div>
        <form className='signup-form'>
                <div className="heading-signup">
                    <h3 className='heading-signup'>Register</h3>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Name</label>
                    <input type="email" id="form2Example1" className="form-control" />
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input type="email" id="form2Example1" className="form-control" />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" id="form2Example2" className="form-control" />
                </div>

              


                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p>Already a member? <a href="#!">login</a></p>
                    
                </div>
        </form>
        </div>
    </>
  )
}
