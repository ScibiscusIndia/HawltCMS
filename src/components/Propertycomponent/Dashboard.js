import React from 'react'
import { db2 } from './firebase';
import {db} from './firebase';
import {useState, useEffect} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import { set, ref, onValue, remove, update } from 'firebase/database';

export const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [bookingsTrans, setBookingsTrans] =  useState([]);
    const [newprop, setNewprop] = useState([]);
    const [ propertylist, setPropertylist ] = useState([]);

    const usersCollectionRef = collection(db2, "Users");
    const bookingstransCollectionRef = collection(db2, "Transactions");
    const propCollectionRef = collection(db2, "Properties");

    //calculating total users 
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log(users);
        };
        getUsers();
        })
    
    //calculating total booking transaction
    useEffect(() => {
        const getBookingstrans = async () => {
            const data = await getDocs(bookingstransCollectionRef);
            setBookingsTrans(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getBookingstrans();
        })
        // console.log(bookingsTrans)

    //calculating total newly properties
    useEffect(() => {
        const getNewprop = async () => {
            const data = await getDocs(propCollectionRef);
            setNewprop(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            
        };
        getNewprop();
        })
    
    //calculating total property hosted
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
        // console.log(propertylist)
    }, [])

  return (
    <div>
        <div className='head-text'>
            <h1 class="display-5">Dashboard</h1>
            <p>Manage all your activity at one place</p>
        </div>
        <div className="search-bar">
            <ul>
                <li className='search-text'><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search..."/></li>
                <li className='search-log'><button className='search-button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg></button></li>
            </ul>
            
        </div>
        <div className='head-text'>
        <p class="h6">Total Revenue - ₹{bookingsTrans.length * 500}</p>
        <p class="h6">Total active users - {users.length}</p>
        <p class="h6">Total property hosted - {propertylist.length}</p>
        <p class="h6">Total booking trasanction - {bookingsTrans.length}</p>
        <p class="h6">Total New property inline - {newprop.length}</p>
        </div>
    </div>
  )
}
