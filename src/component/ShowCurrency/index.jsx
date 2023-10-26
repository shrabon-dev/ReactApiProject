import React from 'react'
import './index.css'
import { useGlobalContext } from '../../Context';
import { GiWideArrowDunk } from 'react-icons/gi'


export default function ShowCurrency() {
    let {value} = useGlobalContext();

// If Value Is not Set or Defined then will show empty message
    if(!value){
      return (
        <>
            <div className="card">
              <p className='empty'>!! Search First !!</p>
            </div>
        </>
      )
    }

// If Value Is  Set or Defined 
    return (
      <>
          <div className="card">
           <div className="infoCurrency">
           <div className="flex justify-between align-center">
            <div className="col-5">
                {value.from}
              </div>
              <div className="col-2">
                <div className="icon">
                  <GiWideArrowDunk/>
                </div>
              </div>
              <div className="col-5">
                {value.to} 
              </div>
           </div>
           <div className="result">
           {value.to} : { value.result }
           </div>
           <div className="date">
           As per the records on { value.date }
           </div>
           </div>
           {/* Notice Here */}
           <div className="notice">
            ***This is a free APIs so here is no access for showing more info***
           </div>
          </div>
      </>
    )
}
