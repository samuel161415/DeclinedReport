import './body.css'
import * as React from 'react';
import {useRef} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { userRequest } from '../../requestMethods';
import { createData,createDataTotal} from '../helper/data';
import {useState,useEffect} from 'react'
import Divider from '@mui/material/Divider';
import { ExportToExcel } from '../helper/ExportToExcel';
import fixedHeaderContent from '../helper/fixedHeaderContent'
import fixedHeaderContentTotal from '../helper/fixedHeaderContentTotal';
import rowContentTotal from '../helper/rowContentTotal';
import rowContent from '../helper/rowContent';

const Body=()=>{
 
  const today=new Date().toISOString().split('T')[0]

  const [atmName,setAtmName]=useState([])
  const [Atm,setAtm]=useState({})
  const [eachTotal,setEachTotal]=useState([])
  const [total,setTotal]=useState(0)
  const [rowss,setrowss]=useState([])
  const [totalRow,setTotalRow]=useState([0])
  const [trxRow,setTrxRow]=useState([])
  const [showTable,setShowTable]=useState(false)
  const [startDate,setStartDate]=useState(today)
  const [endDate,setEndDate]=useState(today)
  const [sDate,setSDate]=useState()
  const [eDate,setEDate]=useState()
  const [psDate,setPsDate]=useState(today)
  const [peDate,setPeDate]=useState(today)
  


    useEffect(()=>{
      let res=[]
      atmName.map((key)=>{
        let temp=Atm[key]
        temp.unshift(key.replaceAll('_','-'))
        res.push(createData(temp))
        return res
      })
      setrowss(res)
      let temp=eachTotal.slice(0,13)
      let temp2=eachTotal.slice(13,16)
      let conditions=['INSUFFICIENT_FUNDS','INCORRECT_PIN','CODE 400 DESC','HOST_TX_TIMEOUT','WITHDRAWAL_LMT_EXCEEDED','CONTACT_ISSUER','PIN_TRIES_EXCEEDED_CAP','NO_ACCOUNT','CODE_907','EXPIRED_CARD_CAP','NO_ARPC','*E*','POWER_INTERRUPTION_DURING','TOTAL']
      let trxn=['WITHDRAW','BALANCE-INQUIRY','FAST-CASH-WITHDRAWAL','TOTAL'] 

      temp.push(total)
      temp2.push(total)
      let res2=[]
      let resTrxn=[]

      for(var i=0;i<conditions.length;i++){
        let totArr=[]
        totArr.push(conditions[i])
        totArr.push(temp[i])
        res2.push(createDataTotal(totArr))
      }
      for (var i=0;i<trxn.length;i++){
        let arr=[]
        arr.push(trxn[i])
        arr.push(temp2[i])
        resTrxn.push(createDataTotal(arr))
      }
      setTotalRow(res2)
      setTrxRow(resTrxn)
     

    },[Atm,eachTotal,atmName,total])


  useEffect(()=>{
    const makeRequest=async()=>{
         
       try{
          console.log('startDate',startDate);
          console.log('endDate',endDate);
          const res= await userRequest.post('/total',{
           startDate:startDate,
           endDate:endDate,
          
          });
          // console.log("successData",res.data)
          
          if(res.data){
            let t=0
            let conOnly=res.data.eachTotal.slice(0,13)
            conOnly.map((val)=>t+=val)
            setTotal(t)
            setAtm(res.data.report)
            setEachTotal(res.data.eachTotal)
            setAtmName(Object.keys(res.data.report))
            setShowTable(true)

          }
         }
       catch(err){


            console.log("ERROR")
       }
   
   }

   makeRequest()
   },[startDate,endDate,showTable])

   const handleClick=(e)=>{
    console.log('showtable',showTable);
       if(sDate && eDate){
        console.log('sdate',sDate,' edate ',eDate);
         setStartDate(sDate.toString())
         setEndDate(eDate.toString())
         setShowTable(false)
         console.log('startdate',startDate,' enddtate ',endDate,' prvs',psDate,' pev ',peDate);
       }
      //  if(psDate.toString()!==startDate.toString()||peDate.toString()!=endDate.toString()){
      //       setShowTable(!showTable)
      //       setPsDate(startDate)
      //       setPeDate(endDate)
      //  }
       
      
   }
   const tableRef = useRef(null);
   const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table ref={tableRef} {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
  };

    return(
        <div className="body" >
            <div className="bodyLeft"> 

                <div className="upperLeft">

                   <p>Enter Your Date:</p>
                   <input  className='date' type="date" placeholder='start date' onChange={(event) => setSDate(event.target.value)}/>
                   <input  className='date' type="date" placeholder='end date' onChange={(event) => setEDate(event.target.value)}/>
                   <button className='btnSubmit' onClick={handleClick}>Submit</button>

                </div>

                <div className="lowerLeft">
                  
                </div>
            
            </div>
            <div className="bodyRight" >
               {showTable?<>
                <p className='txt'>EVERY ATM DECLINED CONDITION</p>
                <Paper style={{ height: 400, width: '100%', marginBottom:'30px'}}>
                    <div className="excel">
                    <ExportToExcel apiData1={rowss} fileName1={'totalAtmsReport'} apiData2={totalRow} fileName2={'totalSummary'} apiData3={trxRow} fileName3="totalTrxn" />
                      </div>
                   <TableVirtuoso 
                     data={rowss}
                     components={VirtuosoTableComponents}
                     fixedHeaderContent={fixedHeaderContent}
                     itemContent={rowContent} />
                </Paper>
                <Divider variant="middle" />
                <p className='txt'>DECLINED TOTAL RESULT</p>
                <Paper style={{ height: 400, width: '100%' }}>
                   <TableVirtuoso
                      data={totalRow}
                      components={VirtuosoTableComponents}
                      fixedHeaderContent={fixedHeaderContentTotal}
                      itemContent={rowContentTotal} 
                      />
                </Paper>
                <p className='txt'> BASED ON TRANSACTION </p>
                <Paper style={{ height: 400, width: '100%' }}>
                   <TableVirtuoso  
                      data={trxRow}
                      components={VirtuosoTableComponents}
                      fixedHeaderContent={fixedHeaderContentTotal}
                      itemContent={rowContentTotal} 
                      />
                </Paper>
                </>:
                <div className="loader-container">
                   <div className="spinner"></div>
                  </div>}
            </div>
        </div>
    )
}

export default Body