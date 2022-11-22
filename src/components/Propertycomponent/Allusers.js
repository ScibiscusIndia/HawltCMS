import React from 'react'
import {db2} from './firebase';
import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';


export const Allusers = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db2, "Users")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log(users);
        };
        getUsers();
        })

  return (
    <div>
         <div className='head-text'>
            <h1 class="display-5">Active users details</h1>
            <p>Manage all your active users in one place</p>
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
                        <th scope="col">Email</th>
                        <th scope="col">user id</th>
                     </tr>
                </thead>
                <tbody>
                    {
                        users.map((ele, index) =>{
                            return(
                                <>
                                <tr>
                                    <td scope="row">{index+1}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.number}</td>
                                    <td>{ele.email}</td>
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


{/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td></td>
                    </tr> */}