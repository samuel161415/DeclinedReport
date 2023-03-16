

  const columns = [
    {
      width: 150,
      label: 'atmName',
      dataKey: 'atmName',
    },
    {
      width: 100,
      label: 'INSUFFICIENT-FUNDS',
      dataKey: 'INSUFFICIENT_FUNDS',
     
    },
    {
        width: 100,
        label: 'INCORRECT-PIN',
        dataKey: 'INCORRECT_PIN',
       
      }, 
      {
        width: 100,
        label: 'CODE-400-DESC',
        dataKey: 'CODE_400_DESC',
        
      },
      {
        width: 100,
        label: 'HOST-TX-TIMEOUT',
        dataKey: 'HOST_TX_TIMEOUT',
       
      },
      {
        width: 100,
        label: 'WITHDRAWAL-LMT-EXCEEDED',
        dataKey: 'WITHDRAWAL_LMT_EXCEEDED',
        
      },
      {
        width: 100,
        label: 'CONTACT-ISSUER',
        dataKey: 'CONTACT_ISSUER',
        
      },
      {
        width: 100,
        label: 'PIN-TRIES-EXCEEDED-CAP',
        dataKey: 'PIN_TRIES_EXCEEDED_CAP',
        
      },
      {
        width: 100,
        label: 'NO-ACCOUNT',
        dataKey: 'NO_ACCOUNT',
        numeric: true,
      },
      {
        width: 100,
        label: 'CODE-907-DESC',
        dataKey: 'CODE_907_DESC',
        
      },
    
      {
        width: 100,
        label: 'EXPIRED-CARD-CA',
        dataKey: 'EXPIRED_CARD_CAP',
       
      }, 
          
    
      {
        width: 50,
        label: 'NO-ARPC',
        dataKey: 'NO_ARPC',
        
      },
    
      {
       
        width: 50,
        label: 'E',
        dataKey: 'E',
      
      },
      {
        width: 50,
        label: 'PI',
        dataKey: 'POWER_INTERRUPTION',
        
      },
      {
        width: 100,
        label: 'TRXN: WITHDRAWAL',
        dataKey: 'WITHDRAWAL',
       
      }, 
      {
        width: 100,
        label: 'TRXN: BALANCE-INQUIRY',
        dataKey: 'BALANCE_INQUIRY',
       
      }, 
      {
        width: 100,
        label: 'TRXN: FAST-CASH-WITHDRAWAL',
        dataKey: 'FAST_CASH_WITHDRAWAL',
       
      }, 
    
  ];
  const columnsTotal = [
    {
      width: 100,
      label: 'Conditions',
      dataKey: 'Conditions',
    },
    {
      width: 50,
      label: 'totalValue',
      dataKey: 'total',
     
    },
    
    
  ];


  function createData([atmName, INSUFFICIENT_FUNDS, INCORRECT_PIN, CODE_400_DESC, HOST_TX_TIMEOUT,WITHDRAWAL_LMT_EXCEEDED,CONTACT_ISSUER,PIN_TRIES_EXCEEDED_CAP,NO_ACCOUNT,CODE_907_DESC,EXPIRED_CARD_CAP,NO_ARPC,E,POWER_INTERRUPTION,WITHDRAWAL,BALANCE_INQUIRY,FAST_CASH_WITHDRAWAL]) {
    return { atmName, INSUFFICIENT_FUNDS, INCORRECT_PIN, CODE_400_DESC, HOST_TX_TIMEOUT,WITHDRAWAL_LMT_EXCEEDED,CONTACT_ISSUER,PIN_TRIES_EXCEEDED_CAP,NO_ACCOUNT,CODE_907_DESC,EXPIRED_CARD_CAP,NO_ARPC,E,POWER_INTERRUPTION,WITHDRAWAL,BALANCE_INQUIRY,FAST_CASH_WITHDRAWAL};
  }
  function createDataTotal([Conditions,total]) {
    return {Conditions,total};
  }
  module.exports={columns,createData,columnsTotal,createDataTotal}