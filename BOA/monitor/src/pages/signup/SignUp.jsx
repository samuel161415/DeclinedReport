import './signup.css'
import { useState } from 'react'
import { Navigate } from "react-router-dom";
import { person } from '../../assets/sampleData';
import { Distric } from '../../assets/sampleData';
import { userRequest } from '../../requestMethods';

const SingUp=()=>{

    const [error,setError]=useState(null)
    const [success,setSuccess]=useState(null)
    const Admin=['false','true']

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
            if(!(event.target.username.value)||!(event.target.password.value)||
            !(event.target.district.value)) {
                alert('input is missing')
                return
            }
            const admin=event.target.district.value==='Head_Office'?true:false
           
            const res= await userRequest.post('/register',{
              password:event.target.password.value,
              username:event.target.username.value,
              district:event.target.district.value,
              admin:admin
          })
         
          alert('User is created successflully')
          

        } catch (error) {
          setError(error );
          alert('user is not created. Try using different username')
        }
      }
    return(
        <div className="signup">
          
             <div className="form_box_signup">
             <form
                onSubmit={(event) => handleSubmit(event)} 
                className='box_signup'>
                    <h1 id='singup_title'>SIGNUP</h1>
                    <input type='email' placeholder="Outlook username" className='signup_input' name='username' />
                    <input type="password" className="signup_input" placeholder="password" name='password' />
                   
                    <select  className='signup_input' placeholder='district' name='district'
                       >
                        {Distric.map((option) => (
                        <option value={option} key={option}>{option}</option>
                        ))}
                    </select>
                    <button  type='submit' id='submitBtn' >
                     Signup
                   </button>
                   <p style={{color:'red',
                        display:error?'block':'none',marginLeft:'10px'}}>wrong credential</p>
                    
                </form>
             </div>
             

            
         
        </div>
    )

}
export default SingUp