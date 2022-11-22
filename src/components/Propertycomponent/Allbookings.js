import React from 'react'
import {db2} from './firebase';
import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';

export const Allbookings = () => {
    const [bookings, setBookings] =  useState([]);
    const bookingsCollectionRef = collection(db2, "Bookings");

    useEffect(() => {
        const getBookings = async () => {
            const data = await getDocs(bookingsCollectionRef);
            setBookings(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log(bookings);
        };
        getBookings();
        })
    
  
  return (
    <div>Allbookings... </div>
  )
}


// username,user phone, property name, status, 