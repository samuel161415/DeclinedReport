import './login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { person } from '../../assets/sampleData';
import { userRequest } from '../../requestMethods';

const Login=()=>{
    const[val,setVal]=useState(false)
    const [user,setUser]=useState(null)
    const [error,setError]=useState(null)


    
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
            if(!(event.target.username.value)&&!(event.target.password.value)) {
                alert('input is missing')
                return
            }
            const res= await userRequest.post('/login',{
                password:event.target.password.value,
                username:event.target.username.value,
            })
         
           setUser(res.data)

            

           
        } catch (error) {
          setError(error);
        }
      }
    return(
        <div className="login">
            {user && (
             <Navigate to="/home" replace={true} state={{user:user}} />
             )}

              <div  className='box_login'>
              <form id='login_form'
                onSubmit={(event) => handleSubmit(event)} 
                >
                        <input type='email' placeholder="username" className='login_input' name='username'/>
                        <input type="password" className="login_input" placeholder="password" name='password' />
                        <button  type='submit' id='submitBtn' >
                            Login
                        </button>
                        <p style={{color:'red',
                        display:error?'block':'none',marginLeft:'10px'}}>wrong credential</p>
                    
                        </form>
                       

              </div>
              
                
            
         
        </div>
    )

}
export default Login