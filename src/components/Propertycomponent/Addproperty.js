import React, { useEffect, useState} from 'react'
import '../assests/allproperty.css'
import { db } from './firebase';
import { uid } from 'uid';
import { set, ref, onValue, remove, update } from 'firebase/database';
import { Maintab } from '../Maintab';

export const Addproperty = () => {
  const [name, setName] = useState('');
  const [hostname, setHostname] = useState('');
  const [hosterNo, setHosterNo] = useState('');
  const [address, setAddress] = useState({state: '', area: ''});
  const [vasto, setVasto] = useState({floors:'',bedroom:'',sqrft:'', gender:'Male'});
  const [leftinput, setLeftinput] = useState({reviewname:'', rmsg:'', lct:'', s:'', d:'', t:'', m:''})
  const [checked1, setChecked1] = useState("No");
  const [checked2, setChecked2] = useState("No");
  const [checked3, setChecked3] = useState("No");
  const [checked4, setChecked4] = useState("No");
  const [checked5, setChecked5] = useState("No");
  const [checked6, setChecked6] = useState("No");
  const [checked7, setChecked7] = useState("No");
  const [checked8, setChecked8] = useState("No");
  const [checked9, setChecked9] = useState("No");
  const [checked10, setChecked10] = useState("No");
  const [checked11, setChecked11] = useState("No");
  const [checked12, setChecked12] = useState("No");




  console.log(checked1);

  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`),{
      name : name,
      address : {country : 'India', state : address.state, area : address.area},
      hostedby : hostname,
      hosterNo : hosterNo,
      floors : vasto.floors,
      bedroom : vasto.bedroom,
      squarefeet : vasto.sqrft,
      gender : vasto.gender,
      sharing: {single:leftinput.s, double:leftinput.d, triple:leftinput.t, multi:leftinput.m},
      facilities : {wifi:checked1, appsupport:checked2, parking:checked3, securitycameras:checked4, fooding:checked5, tv:checked6, ac:checked7, celingfan:checked8, firstsidkit:checked9, geyser:checked10, heater:checked11, washingmaching:checked12},
      id : uuid,
    });
    setName("");
    setAddress({state: '', area: ''});
    setHostname("");
    setVasto({floors:'',bedroom:'',sqrft:'', gender:''});
    setLeftinput({reviewname:'', rmsg:'', lct:'', s:'', d:'', t:'', m:''});
    
  };



  return (
    <div>    
      <Maintab/>
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
              <button type="button" onClick={writeToDatabase} class="btn btn-dark">Save</button>
            </div>
          </div>
        </div>
      </div>
      {/* --- */}
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput111"  class="form-label">Property name</label>
              <input type="email" class="form-control"  id="exampleFormControlInput111" placeholder="xyz proerty" value={name} onChange={e => setName(e.target.value)} />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Hoster's name</label>
              <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Your name" value={hostname} onChange={e => setHostname(e.target.value)} />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">State</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Bangalore, Pune etc" value={address.state} onChange={e => setAddress(pre => {
                return {...pre, state:e.target.value}
              })} />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Area</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Near new place something." value={address.area} onChange={e => setAddress(pre => {
                return {...pre, area:e.target.value}
              })} />
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
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="00" value = {vasto.floors} onChange={e => setVasto(pre => {
                return {...pre, floors:e.target.value}
              })} />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Bedrooms per floor</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="000" value={vasto.bedroom} onChange={e => setVasto(pre => {
                return {...pre, bedroom:e.target.value}
              })} />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Square feet area</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="000000" value={vasto.sqrft} onChange={e => setVasto(pre => {
                return {...pre, sqrft:e.target.value}
              })} />
            </div>
          </div>
          <div class="col">
            <br />
            <div class="dropdown">
              <label for="exampleFormControlInput1" class="form-label">Select gender:</label><br />
             <select value={vasto.gender} onChange={e => setVasto(pre => {return{...pre, gender:e.target.value}})} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Colive">Co live</option>
             </select>
         
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Hoster's mobile number</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="123456990" value={hosterNo} onChange={e => setHosterNo(e.target.value)} />
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
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="1200" value={leftinput.s} onChange={e => setLeftinput(pre => {return {...pre, s:e.target.value}})} />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Double sharing</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="9000" value={leftinput.d} onChange={e => setLeftinput(pre => {return {...pre, d:e.target.value}})} />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Triple sharing</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="7000" value={leftinput.t} onChange={e => setLeftinput(pre => {return {...pre, t:e.target.value}})} />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Multi sharing</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="5000" value={leftinput.m} onChange={e => setLeftinput(pre => {return {...pre, m:e.target.value}})} />
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
              <input class="form-check-input" type="checkbox" value="No" id="flexCheckDefault"  onChange={()=>{setChecked1("Yes")}} />
              <label class="form-check-label" for="flexCheckDefault">Wifi</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={()=>{setChecked2("Yes")}}  />
              <label class="form-check-label" for="flexCheckChecked">App support</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>{setChecked3("Yes")}}  />
              <label class="form-check-label" for="flexCheckDefault">Parking</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={()=>{setChecked4("Yes")}}  />
              <label class="form-check-label" for="flexCheckChecked">Security Camera</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>{setChecked5("Yes")}}  />
              <label class="form-check-label" for="flexCheckDefault">Fooding</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={()=>{setChecked6("Yes")}}  />
              <label class="form-check-label" for="flexCheckChecked">Television</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>{setChecked7("Yes")}}  />
              <label class="form-check-label" for="flexCheckDefault">air conditioner</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={()=>{setChecked8("Yes")}}  />
              <label class="form-check-label" for="flexCheckChecked">Celing fan</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>{setChecked9("Yes")}}  />
              <label class="form-check-label" for="flexCheckDefault">First aid kit</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={()=>{setChecked10("Yes")}}  />
              <label class="form-check-label" for="flexCheckChecked">Geyser</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>{setChecked11("Yes")}}  />
              <label class="form-check-label" for="flexCheckDefault">Heater</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={()=>{setChecked12("Yes")}}  />
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
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Put google's location hyper link" value={leftinput.lct} onChange={e => setLeftinput(pre => {return {...pre, lct:e.target.value}})} />
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
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Reviewer's name" value={leftinput.reviewname} onChange={e => setLeftinput(pre => {return {...pre, reviewname:e.target.value}})} />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Review</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Review" value={leftinput.rmsg} onChange={e => setLeftinput(pre => {return {...pre, rmsg:e.target.value}})} />
            </div>
          </div>
        </div>
      </div>
      {/* --- */}
      <div class="container text-center">
        <div class="row">
          <div class="col"><br /><br />
            <button type="button" id="save-button-90" onClick={writeToDatabase} class="btn btn-dark">Save</button>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  )
}
