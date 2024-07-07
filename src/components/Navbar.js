import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid flex centre m-3">
          
          <a className="navbar-brand" href="/">nhcafe</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <Link to="/login">
                  <Button to="">Login</Button>
                </Link>

              </li>
              <li>.</li>
              <li className="nav-item">
                <Link to="/login">
                  <Button to=""  className='btn btn-info'>Register</Button>
                </Link>


              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </div></div>
  )
}
