import React from 'react'
import './assests/maintabstyle.css'
import {Link} from 'react-router-dom'




export const Maintab = () => {
  return (
    <div>
        <ul className='main-list' >
          <li><Link to = '/' >Dashboard</Link></li>
          <li><Link to = '/allproperty' >All property</Link></li>
          <li><Link to = '/addproperty' >Add property</Link></li>
          <li><Link to = '/allbookings' >Bookings</Link></li>
          <li><Link to = '/usersdetails_90-Proxyserver@8ujK' >users</Link></li>
          <li><Link to = '/Dashboard/newproperties_inthe-House54' >Newly arrived </Link></li>
        </ul>
    </div>
  )
}
