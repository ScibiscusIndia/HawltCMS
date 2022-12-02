import React from 'react'
import {db2} from './firebase';
import {useState, useEffect} from 'react';
import {  doc} from 'firebase/firestore';
import {useCollectionData} from "react-firebase-hooks/firestore";
 import { collection, query, where, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
import { Maintab } from '../Maintab';

export const Allbookings =  () => {
    const [bookings, setBookings] =  useState([]);

    const bookingsCollectionRef = collection(db2, "Transactions");

        useEffect(() => {
        const getBookings = async () => {
            const data = await getDocs(bookingsCollectionRef);
            setBookings(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getBookings();
        })

  return (
    <div>
        <Maintab/>
       <div className='head-text'>
            <h1 class="display-5">All bookings.</h1>
            <p>Manage all your active bookings or Transactions at one place</p>
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
                        <th scope="col">Username</th>
                        <th scope="col">Mobile number</th>
                        <th scope="col">Property name</th>
                        <th scope="col">Transaction id</th>
                     </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((ele, index) =>{
                            return(
                                <>
                                <tr>
                                    <td scope="row">{index+1}</td>
                                    <td>{ele.username == '' ? "null" : ele.username}</td>
                                    <td>{ele.mobile_number}</td>
                                    <td>{ele.property_name}</td>
                                    <td>{ele.id}</td>
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


// username,user phone, property name, status, 
//  const bookingsCollectionRef = collection(db2, "Bookings/");
    

//     useEffect(() => {
//         const getBookings = async () => {
//             const data = await getDocs(bookingsCollectionRef);
//             setBookings(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
//             // console.log(bookings);
//         };
//         getBookings();
//         })


  //  const query = collection(db2, "Bookings","27fd3a829ff5ba93");
  //   const [docs, loading, error] = useCollectionData(query);

  //   console.log(docs);
    