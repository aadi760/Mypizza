import React from 'react'
import { useState, useEffect } from 'react'

import Error from '../components/Error'
import Loading from '../components/Loading'
import axios from 'axios'
function Loginscreen() {


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  

    const [error, seterror] = useState();
    const [loading, setloading] = useState(false);





    const Login = async e => {

        e.preventDefault();


         const user = {

            email,
            password,

        }

        try {
            setloading(true)
            const result = (await axios.post('/api/users/login', user)).data
            setloading(false)
           

            localStorage.setItem('currentUser', JSON.stringify(result))
            window.location.href='/'



        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(true)
        }

    


    }
    
    return (
        <div >

            {loading && (<Loading></Loading>)}
            {error && (<Error message='Invalid credentials'></Error>)}
            <div className="row  justify-content-center mt-5">

                <div className="col-md-5">

                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                    <div>

                        <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }}></input>
                        <input type="text" className="form-control" placeholder="password" required value={password} onChange={(e) => { setpassword(e.target.value) }}></input>

                        <button onClick={Login} className="btn mt-3">Login</button>
                        
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginscreen