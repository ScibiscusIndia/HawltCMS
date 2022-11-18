import './App.css';
import { Maintab } from './components/Maintab';
import { Navbar } from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import {Allproperty} from './components/Propertycomponent/Allproperty'
import {Addproperty} from './components/Propertycomponent/Addproperty'

function App() {
  return (
    <div>
     <Navbar/>
     <Maintab/>

     <Routes>
      <Route path ='/allproperty' element={<Allproperty/>} />
      <Route path ='/addproperty' element={<Addproperty/>} />
     </Routes>
    </div>
  );
}

export default App;
