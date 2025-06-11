//  import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Paste from './components/Paste';
// import Viewpaste from './components/Viewpaste';
// // ...existing code...
//  import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
// const router =createBrowserRouter(
//   [
//     {
// path:"/",
// element:
// <div>
// <Navbar/>
// <Home/>
// </div>
//     },
// {
//   path:"/Pastes",
// element:
// <div>
//   <Navbar/>
//   <Paste/>
// </div>
// },
// {
// path:"/:id",
// element:
// <div>
//   <Navbar/>
//   <Viewpaste/>
// </div>
// },
//   ]
// );
// function App() {
   

//   return (
    
//       <div>
//         <RouterProvider router={router}/>
//       </div>
      
//   )
// }

// export default App
import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import Viewpaste from './components/Viewpaste';
import EditPaste from './components/EditPaste';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/Pastes",
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/edit/:id",
    element: (
      <div>
        <Navbar />
        <EditPaste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <Viewpaste />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;