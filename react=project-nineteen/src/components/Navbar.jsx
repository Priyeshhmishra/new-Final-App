// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
     
//     <div className='flex flex-row gap-4 justify-evenly'>
//       <NavLink to="/">
//         Home
//       </NavLink>
//       <NavLink to="/Pastes">
//         Paste
//       </NavLink>
//     </div>
//   ) 
// }

// export default Navbar
 import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/Pastes">
        Paste
      </NavLink>
    </div>
  )
}

export default Navbar
