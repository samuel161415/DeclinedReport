import './update.css'
import { useState } from 'react'
import { Navigate } from "react-router-dom";
import { person } from '../../assets/sampleData';
import { Distric } from '../../assets/sampleData';
import { userRequest } from '../../requestMethods';
const Update=()=>{
    const [user,setUser]=useState(null)
    const [error,setError]=useState(null)

    const Admin=['true','false']
    const handleSubmit=async(event)=>{
        const obj={}
      

        event.preventDefault();
        try {
            
            if(!(event.target.username.value)) {
                alert('input is missing')
                return
            }
           
            obj.username=event.target.username.value
           
            if(event.target.password.value){
                obj.password=event.target.password.value
            }
           
            if(event.target.district.value){
                obj.district=event.target.district.value
                obj.admin=event.target.district.value==="Head_Office"?true:false
                
            }

           
           
            const res= await userRequest.put('/update',obj)
            alert("User acount is updated successfully")

         } catch (error) {
          alert("User's acount is not updated. Please try again")
        }
      }
    return(
        <div className="update">
            
             <div id='form_box_login'>
             <form
                onSubmit={(event) => handleSubmit(event)} 
                className='box_update'>
                    <h1 id='update_title'>UPDATE</h1>
                    <input type='email' placeholder="Outlook username" className='update_input' name='username'/>
                    <input type="password" className="update_input" placeholder="password" name='password' />
                   
                    <select  className='update_input' placeholder='Adama' name='district'
                        >
                        {Distric.map((option) => (
                        <option value={option} key={option}>{option}</option>
                        ))}
                    </select>
                    <button  type='submit' id='submitBtn' >
                     Update
                   </button>
                  
                </form>

             </div>
             
            
         
        </div>
    )

}
export default Update