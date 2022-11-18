import React from 'react'
import '../assests/allproperty.css'

export const Addproperty = () => {
  return (
    <div>    
      {/* --- */}
      <div class="container">
        <div class="row">
          <div class="col">
            <div className='head-text-01'>
              <h1 class="display-5">Add property</h1>
              <p>Add property from one place.</p><br />
          </div>
          </div>
          <div class="col">
            <div className='save-but-02'>
              <button type="button" class="btn btn-dark">Save</button>
            </div>
          </div>
        </div>
      </div>
      {/* --- */}
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Property name</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="xyz proerty"/>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Hosting name</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your name"/>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">State</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Bangalore, Pune etc"/>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Area</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Near new place something."/>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Floors</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="00"/>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Bedrooms per floor</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="000"/>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Square feet area</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="000000"/>
            </div>
          </div>
          <div class="col">
            <br />
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Gender</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Male</a></li>
                <li><a class="dropdown-item" href="#">Female</a></li>
                <li><a class="dropdown-item" href="#">Co live</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <br />
       <div class="container">
        <label for="exampleFormControlInput1" class="form-label"><strong>Price of sharing</strong></label>
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">single sharing</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="1200"/>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Double sharing</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="9000"/>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Triple sharing</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="7000"/>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Multi sharing</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="5000"/>
            </div>
          </div>
        </div>
      </div>
      {/* ------ */}
      <br />
      <div class="container ">
        <label for="exampleFormControlInput1" class="form-label"><strong>Facilities</strong></label>
        <p>Check on the box if the facility is available or else leave it.</p>
        <div class="row">
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">Wifi</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label class="form-check-label" for="flexCheckChecked">App support</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">Parking</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label class="form-check-label" for="flexCheckChecked">Security Camera</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">Fooding</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label class="form-check-label" for="flexCheckChecked">Television</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">air conditioner</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label class="form-check-label" for="flexCheckChecked">Celing fan</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">First aid kit</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label class="form-check-label" for="flexCheckChecked">Geyser</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">Heater</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label class="form-check-label" for="flexCheckChecked">Washing machine</label>
            </div>
          </div>
        </div>
      </div>
      {/* --- */}
      <br /><br />
       <div class="container ">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Location</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Put google's location hyper link"/>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"></label>
            </div>
          </div>
        </div>
      </div>
      {/* --- */}
       <div class="container">
        <label for="exampleFormControlInput1" class="form-label"><strong>Reviews</strong></label>
        <p>Put a review for your customerss.</p>
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Reviewer's name"/>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Review</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Review"/>
            </div>
          </div>
        </div>
      </div>
      {/* --- */}
      <div class="container text-center">
        <div class="row">
          <div class="col"><br /><br />
            <button type="button" id="save-button-90" class="btn btn-dark">Save</button>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  )
}
