import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AtmIcon from '@mui/icons-material/Atm';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import './right.css'
import { names } from '../../assets/atmNames';
import { district_name } from '../../assets/atmNames';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Badge from '@mui/material/Badge';
import AlbumIcon from '@mui/icons-material/Album';
import SimCardIcon from '@mui/icons-material/SimCard';



function RightPage(props){
  let filtered=[]

  if(props.user.district==='Head_Office'){
     filtered=props.atms
  }
  else{
     filtered=props.atms.filter((val)=>{

     return val.includes(district_name[props.user.district])
    })
  }

  



     var cn={}
     const handleColor=(fit,sup,sen)=>{

            if(fit===4||sen===2) return 'red'
            else if(sup===3) return 'orange'
            else if (fit===2||sup===2) return 'yellow'
            else return 'white'
     }
     const handleReaderColor=(fit)=>{
          if(fit===4||fit===3||fit===1) return 'red'
          else if (fit===2) return 'yellow'
          else return 'white'
   }

    return(
        <div className="right_page">
          
      <List
           sx={{ width: '70%',bgcolor: 'background.paper' 
           ,overflow:'hidden',overflowY:'scroll',height:'70vh'

          }}
           component="nav"
           aria-labelledby="nested-list-subheader"
           subheader={
           <ListSubheader component="div" id="nested-list-subheader" style={{
            textAlign:'center',
            backgroundColor:'#AACB73'
           }}>
              {props.title}
           </ListSubheader>
      }
    >
         {
            filtered.map((val,idx)=>{
              
            
                if(props.result && props.title!=='Out of service' ){
                     cn={
                     dfit:props.result[val].fitness_array[2],
                     dsup:props.result[val].supply_array[1],
                     dsen:props.result[val].sensor_array[2],
                     h1sup:props.result[val].supply_array[2],
                     h1fit:props.result[val].fitness_array[3],
                     h1sen:props.result[val].sensor_array[2],
                     h2sup:props.result[val].supply_array[3],
                     h2fit:props.result[val].fitness_array[4],
                     h2sen:props.result[val].sensor_array[3],
                     h3sup:props.result[val].supply_array[4],
                     h3fit:props.result[val].fitness_array[5],
                     h3sen:props.result[val].sensor_array[4],
                     h4sup:props.result[val].supply_array[5],
                     h4fit:props.result[val].fitness_array[6],
                     h4sen:props.result[val].sensor_array[5],
                    //  mcr:props.result[val].fitness_array[1],
                     enc:props.result[val].fitness_array[0],
                     scr:props.result[val].fitness_array[1],
                    }
      
                }
             
                
        

                return(
                    < div key={idx}>
                 <Link key={idx} to='/singleAtm' state={{
                result:props.result,
                  terminalId:val
                 }}
                   
                 style={{
                  textDecoration:'none',
                  color:"black"
                 }} >
                  <ListItemButton  sx={{ margin:"10px" , width:'100%',display:'flex'}}>
                    <ListItemIcon>
                    <ArrowForwardIcon />
                  </ListItemIcon>
                  <ListItemText primary={names[val]?names[val]:val} className='rightErrorTxt' />
                  <div className='right_txt_wrapper' >
                  <ListItemText primary={ <SettingsOutlinedIcon />}  className="rightError" 
                  sx={{
                    backgroundColor:Number(cn.dfit)===4||Number(cn.dsup)===4||Number(cn.dsen)===2?'red':'white',
                    display:Number(cn.dfit)===4||Number(cn.dsup)===4||Number(cn.dsen)===2?'inline':'none'
                  }}/>
                  
                  <ListItemText primary={  <Badge badgeContent={1} >
                        <AlbumIcon />
                      </Badge>} className="rightError" 
                      style={{
                        backgroundColor:handleColor(Number(cn.h1fit),Number(cn.h1sup),Number(cn.h1sen)),
                        display:handleColor(Number(cn.h1fit),Number(cn.h1sup),Number(cn.h1sen))==='white'?'none':'inline'
                    }}/>
                  <ListItemText primary={ <Badge badgeContent={2} >
                        <AlbumIcon />
                        </Badge>} className="rightError" 
                   style={{
                    backgroundColor:handleColor(Number(cn.h2fit),Number(cn.h2sup),Number(cn.h2sen)),
                    display:handleColor(Number(cn.h2fit),Number(cn.h2sup),Number(cn.h2sen))==='white'?'none':'inline'
                  }}/>
                  <ListItemText primary={ <Badge badgeContent={3} >
                        <AlbumIcon />
                      </Badge>} className="rightError" 
                   style={{
                    backgroundColor:handleColor(Number(cn.h3fit),Number(cn.h3sup),Number(cn.h3sen)),
                    display:handleColor(Number(cn.h3fit),Number(cn.h3sup),Number(cn.h3sen))==='white'?'none':'inline'
                  }} />
                  <ListItemText primary={ <Badge badgeContent={4} >
                        <AlbumIcon />
                      </Badge>} className="rightError" 
                   style={{
                    backgroundColor:handleColor(Number(cn.h4fit),Number(cn.h4sup),Number(cn.h4sen)),
                    display:handleColor(Number(cn.h4fit),Number(cn.h4sup),Number(cn.h4sen))==='white'?'none':'inline'
                  }} />
                    <ListItemText primary={'Enc'} className="rightError" 
                   style={{
                    backgroundColor: handleReaderColor(Number(cn.enc)),
                    display:handleReaderColor(Number(cn.enc))==='white'?'none':'inline'
                  }} />
                    {/* <ListItemText primary={'Mcr'} className="rightError" 
                   style={{
                    backgroundColor:handleReaderColor(Number(cn.mcr)),
                    display:handleReaderColor(Number(cn.mcr))==='white'?'none':'inline'
                  }} /> */}
                    <ListItemText primary={<SimCardIcon />} className="rightError" 
                   style={{
                    backgroundColor:handleReaderColor(Number(cn.scr)),
                    display:handleReaderColor(Number(cn.scr))==='white'?'none':'inline'
                  }} />
                  </div>
              </ListItemButton >
                 </Link>
               
              <Divider />
              </div>
                )
                
             
                })
         }

    </List>
        </div>
    )

}

export default RightPage