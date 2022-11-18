import React from 'react'
import './assests/maintabstyle.css'
import {Link} from 'react-router-dom'




export const Maintab = () => {
  return (
    <div>
        <ul className='main-list' >
            <li><Link to = '/allproperty' >All property</Link></li>
            <li><Link to = '/addproperty' >Add property</Link></li>
        </ul>
    </div>
  )
}
