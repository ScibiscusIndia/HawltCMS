import React from 'react'
import {useState, useEffect} from 'react';
import { set, ref, onValue, remove, update } from 'firebase/database';
import {db} from './firebase';

export var totalHostedProp = 0;

export const Tabledata = () => {
    //read
    const [ propertylist, setPropertylist ] = useState([]);
    const [count, setCount] = useState(0);

      useEffect(() => {
        onValue(ref(db), (snapshot)=>{
            setPropertylist([]) //resetting the array. because the array content is stored twice or n
            const data = snapshot.val();
            if(data !== null){
                Object.values(data).map((pro) => {
                    setPropertylist((oldPro) => [...oldPro, pro]);
                });
            }
        });
        setCount(propertylist.length);
        totalHostedProp = count;
        // console.log(propertylist)
    }, [])

    //removing the element
    function removeProp(n){
      remove(ref(db, `/${n.id}`));
      // alert(n);
      // console.log(n);
    }
    

  return (
    <div>
        <table className="table table-hover">
          <thead>
                <tr>
                  <th scope="col">Sno</th>
                  <th scope="col">Name</th>
                  <th scope="col">State</th>
                  <th scope="col">Area</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Floors</th>
                  <th scope="col">Rooms per Floors</th>
                  <th scope="col">Facilities</th>
                  <th scope="col">Pricing</th>
                  <th scope="col">Location</th>
                  <th scope="col">Hosted by</th>
                </tr>
              </thead>
       <tbody>         
         {
          propertylist.map((ele,index)=>{
            return(
              <>
              <tr>
                <th scope="row">{index+1}</th>
                <td>{ele.name}</td>
                <td>{ele.address.state}</td>
                <td>{ele.address.area}</td>
                <td>{ele.forgender}</td>
                <td>{ele.floors}</td>
                <td>{ele.bedroom}</td>
                <td>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Facilities </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">air conditioner - {ele.facilities.ac == 1 ? 'Yes' : 'No' }</a></li>
                        <li><a class="dropdown-item" href="#">App support - {ele.facilities.appsupport == 1 ? 'Yes' : 'No' }</a></li>
                        <li><a class="dropdown-item" href="#">Celing fan - {ele.facilities.celingfan == 1 ? 'Yes' : 'No' }</a></li>
                        <li><a class="dropdown-item" href="#">First aid kit - {ele.facilities.firstaidkit == 1 ? 'Yes' : 'No' }</a></li>
                        <li><a class="dropdown-item" href="#">Fooding - {ele.facilities.fooding == 1 ? 'Yes' : 'No' }</a></li>
                        <li><a class="dropdown-item" href="#">Geyser - {ele.facilities.geyser == 1 ? 'Yes' : 'No' }</a></li>
                        <li><a class="dropdown-item" href="#">Heater - {ele.facilities.heater == 1 ? 'Yes' : 'No' }</a></li>
                        <li><a class="dropdown-item" href="#">Parking - {ele.facilities.parking == 1 ? 'Yes' : 'No' }</a></li>
                        <li><a class="dropdown-item" href="#">Television - {ele.facilities.tv == 1 ? 'Yes' : 'No' }</a></li>
                        <li><a class="dropdown-item" href="#">Washing Machine - {ele.facilities.washingmachine == 1 ? 'Yes' : 'No' }</a></li>
                        <li><a class="dropdown-item" href="#">Wifi - {ele.facilities.wifi == 1 ? 'Yes' : 'No' }</a></li>
                      </ul>
                  </div>
                </td>
                <td>
                  <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pricing</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Single Sharing ₹{ele.sharing.single}</a></li>
                      <li><a class="dropdown-item" href="#">Double Sharing ₹{ele.sharing.double}</a></li>
                      <li><a class="dropdown-item" href="#">Triple Sharing ₹{ele.sharing.triple}</a></li>
                      <li><a class="dropdown-item" href="#">Multi Sharing ₹{ele.sharing.multi}</a></li>
                    </ul>
                  </div>
                </td>
                <td ><a href={ele.location}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/></svg></a></td>
                <td>{ele.hostedby}</td>
                <td><button type="button" class="btn btn-dark" onClick={() => removeProp(ele)} >Delete</button></td>
              </tr>
              </>
            );
          })
         }
         
       </tbody>
     </table>
    </div>
  )
}


{/* <tr>
           <th scope="row">2</th>
           <td>Jacob</td>
           <td>Thornton</td>
           <td>@fat</td>
         </tr>
         <tr>
           <th scope="row">3</th>
           <td colspan="2">Larry the Bird</td>
           <td>@twitter</td>
         </tr> */}