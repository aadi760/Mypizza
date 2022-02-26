import React from 'react'
import { useSelector } from 'react-redux'

import 'bootstrap'
const Navbar = () => {
    const cartstate = useSelector(state => state.cartReducer)
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const handleLogout = () => {
       
        localStorage.clear();
      };


    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
                <a className="navbar-brand" href="/">MyPizza</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  ms-auto">

                        {user ? (<>
                           <div className="dropdown  ">
                           <a  className=" dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             {user.name}
                           </a>
                         
                           <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            
                             <a className="dropdown-item" href="#">Orders</a>
                             <a  onClick={handleLogout} className="dropdown-item" href="/login">Logout</a>
                           </div>
                           </div>
                        <li className="nav-item">
                        <a className="nav-link" href="/cart">Cart{cartstate.cartItems.length}</a>
                        </li> 
                          </>


                        ) : (<>
                          <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                       
                        
                    </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                           
                            
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                       
                        
                    </li>
                  
                        </>
                            
                        
                        
                         
                     
                        

                        )}





                 


                </ul>
        </div>
            </nav >
        </div >
    )
}

export default Navbar
