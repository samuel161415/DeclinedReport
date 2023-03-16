import {names} from "./atmNames"
export const outOfService=(res)=>{
        // console.log('res is ',res);

        const allAtms=Object.keys(names)
        // console.log('all atm keys',allAtms);
        const result=allAtms.filter((val)=>{
        return !res.includes(val)
   })
   return result
}