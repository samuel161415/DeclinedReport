import React,{useState,useEffect} from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { userRequest } from "../../requestMethods"
import './singleAtm.css'
import DetailStatus from "../../components/detail/DetailStatus"
import LeftPage from "../../components/LeftPage/LeftPage"

function SingleAtm(){
    const location=useLocation()
    const {state}=location

    const [atmCondition,setAtmCondition]=useState([])
    const [atmTerminal,setAtmTerminal]=useState('')
    
    useEffect(()=>{
        const makeRequest=async()=>{
         
            try{

                const res= await userRequest.post('/singleAtm',{
                terminalId:state.terminalId,
                result:state.result,
               
               });

               setAtmCondition(res.data)
               setAtmTerminal(state.terminalId)
              
            }
            catch(err){

            } 
        }
        makeRequest()

    },[state.result,state.terminalId])
 return(
    <div className="single">
        <h2>{atmTerminal}</h2>
        <div className="singleAtm">
        <div className="single_left">
            <h2>Fitness Status</h2>
            {atmCondition.length>0? <DetailStatus detail={atmCondition[0]} />
            :<p></p>}      
        </div>
        <div className="single_middle">
          <h2>Supply Status</h2>
           {atmCondition.length>0? <DetailStatus detail={atmCondition[1]} />
            :<p></p>}
        </div>
        <div className="single_right">
         <h2>Sensor Status</h2>
          {atmCondition.length>0? <DetailStatus detail={atmCondition[2]} />
            :<p></p>}
        </div>
    </div>
    
    </div>
 )
}
export default SingleAtm