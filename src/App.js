import './App.css';
import { Maintab } from './components/Maintab';
import { Navbar } from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import {Allproperty} from './components/Propertycomponent/Allproperty'
import {Addproperty} from './components/Propertycomponent/Addproperty'
import {Allbookings} from './components/Propertycomponent/Allbookings'
import { Allusers } from './components/Propertycomponent/Allusers';
import {Newlyprop} from './components/Propertycomponent/Newlyprop';
import { Dashboard } from './components/Propertycomponent/Dashboard';
import { Login } from './components/Propertycomponent/Login';

function App() {
  return (
    <div>
     <Navbar/>
     {/* <Maintab/> */}

     <Routes>
      <Route path ='/' element={<Dashboard/>} />
      <Route path ='/allproperty' element={<Allproperty/>} />
      <Route path ='/addproperty' element={<Addproperty/>} />
      <Route path ='/allbookings' element={<Allbookings/>} />
      <Route path ='/usersdetails_90-Proxyserver@8ujK' element={<Allusers/>} />
      <Route path ='/Dashboard/newproperties_inthe-House54' element={<Newlyprop/>} />
      <Route path ='/Login' element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
