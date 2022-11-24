import React from 'react'
import {db2} from './firebase';
import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';

export const Newlyprop = () => {
    const [newprop, setNewprop] = useState([]);
    const usersCollectionRef = collection(db2, "Properties");

    useEffect(() => {
        const getNewprop = async () => {
            const data = await getDocs(usersCollectionRef);
            setNewprop(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            
        };
        getNewprop();
        })
    
    // console.log(newprop);
  return (
    <div>
        <div className='head-text'>
            <h1 class="display-5">Newly arrived properties</h1>
            <p>Manage all your properties request at one place</p>
        </div>
        <div className="search-bar">
            <ul>
                <li className='search-text'><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search..."/></li>
                <li className='search-log'><button className='search-button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg></button></li>
            </ul>
        </div>
        <div className='table-data'>
        <div className='table table-hover'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Property name</th>
                        <th scope='col'>State</th>
                        <th scope='col'>Area</th>
                        <th scope="col">Floors</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Sharing</th>
                        <th scope="col">user name</th>
                        <th scope="col">user phone</th>
                     </tr>
                </thead>
                <tbody>
                    {
                        newprop.map((ele, index) =>{
                            return(
                                <>
                                <tr>
                                    <td scope="row">{index+1}</td>
                                    <td>{ele.name == '' ? "null" : ele.name}</td>
                                    <td>{ele.address.state == '' ? "null" : ele.address.state}</td>
                                    <td>{ele.address.area == '' ? "null" : ele.address.area}</td>
                                    <td>{ele.floors == '' ? "null" : ele.floors}</td>
                                    <td>{ele.forgender == '' ? "null" : ele.forgender }</td>
                                    <td>
                                        <div class="dropdown">
                                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pricing</a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Single Sharing ₹{ele.sharing.single == '' ? "null" : ele.sharing.single}</a></li>
                                                <li><a class="dropdown-item" href="#">Double Sharing ₹{ele.sharing.double == '' ? "null" : ele.sharing.double}</a></li>
                                                <li><a class="dropdown-item" href="#">Triple Sharing ₹{ele.sharing.triple == '' ? "null" : ele.sharing.triple}</a></li>
                                                <li><a class="dropdown-item" href="#">Multi Sharing ₹{ele.sharing.multi == '' ? "null" : ele.sharing.multi}</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td>{ele.userModel.username }</td>
                                    <td>{ele.userModel.number}</td>
                                </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
     </div>
    </div>
  )
}
