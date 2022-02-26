import React from 'react'
import { useState, useEffect } from 'react'
 import axios from 'axios';

 import Error from '../components/Error'
 import Loading from '../components/Loading'
 import Success from '../components/Success'

function Registerscreen() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const [loading,setloading]=useState(false);
    const [success,setsuccess]=useState();
    const [error,seterror]=useState();

    async function register(){
        if(password==cpassword){
            
       
            const user={
                name,
                email,
                password,
                cpassword
            }
            try {
                setloading(true);
                const result=await axios.post('/api/users/register',user).data
                setloading(false);
                setsuccess(true);


                setname('')
                setemail('')
                setpassword('')
                setcpassword('')
            } catch (error) {
                setloading(false)
                seterror(true)
                console.log(error)
            }
        }
        else{
            alert("passwords not matched")
        }
    }
    return (
        <div>

            {loading && (<Loading></Loading>)}
            {success && (<Success message="registration Successful"></Success>)}
            {error && (<Error></Error>)}
            <div className="row  justify-content-center mt-5">

                <div className="col-md-5">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input type="text" className="form-control" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }}></input>
                        <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }}></input>
                        <input type="text" className="form-control" placeholder="password" required value={password} onChange={(e) => { setpassword(e.target.value) }}></input>
                        <input type="text" className="form-control" placeholder="confirm password" required value={cpassword} onChange={(e) => { setcpassword(e.target.value) }}></input>
                        <button  onClick={register} className="btn mt-3">REGISTER</button>
                        
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registerscreen