// import React from 'react';
// import { BrowserRouter,  Routes,Route } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import AddUser from './AddUser';
// import EditUser from './EditUser';
// import Admin from './Admin';

// const App = () => {
//   // const [id,setId]=useState(0);
//   return (
//     <>
    
//       <BrowserRouter>
//       hiiii
//          <Routes>
//           <Route path="/" element={<Admin/>}>
//             <Route path="/" element={<Dashboard/>} > </Route>
//             <Route path="adduser" element={<AddUser/>} > </Route>
//             <Route path="edituser" element={<EditUser/>} > </Route>
//            </Route>
//          </Routes>
//       </BrowserRouter>
       
//     </>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import EditUser from './EditUser';


const App = () => {
  const [id,setId]=useState(0);
  return (
    <>
      
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Admin/>}>
                 <Route path='/' element={<Dashboard setId={setId}/>}></Route>
                 <Route path='adduser' element={<AddUser/>}></Route>
                 <Route path='/edit/:id' element={<EditUser id={id}/>}></Route>
            </Route>
         </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;