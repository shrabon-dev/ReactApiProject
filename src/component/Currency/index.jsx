import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import { SiConvertio } from 'react-icons/si'
import { useGlobalContext } from '../../Context'

export default function Currency() {

  let [currencyList, setCurrencyList] = useState([])
  let [currencyCode, setCurrencyCode] = useState([])
  let [currencySelectFrom, setCurrencySelectFrom] = useState('')
  let [currencySelectTo, setCurrencySelectTo] = useState('')
  let [currencyAmount, setCurrencyAmount] = useState()
  let key = '206ab30a2bmsh87a0c70843356cep120b44jsn79910dcb1e74';

  useEffect(()=>{
    const fetchData = async () =>{
      let currencyListURL = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols';

      // Fetch Data Using Only Fetch
      try{
          const response = await axios.get(`${currencyListURL}?rapidapi-key=${key}`);
          const data = await response.data;

          setCurrencyList(data.symbols)
          setCurrencyCode(Object.keys(data.symbols))

      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  },[])

  let handleCurrencyFrom = (e) =>{
    setCurrencySelectFrom(e.target.value)
  }
  let handleCurrencyTo = (e) =>{
    setCurrencySelectTo(e.target.value)
  }
  let handleCurrencyAmount = (e) =>{
    setCurrencyAmount(e.target.value)
  }

  let {setValue} = useGlobalContext();
  let handleCurrencyPrint = (e) =>{
    e.preventDefault();
    let currencyConvertURL = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert';

    let convert = async () =>{
      const response = await axios.get(`${currencyConvertURL}?rapidapi-key=${key}&from=${currencySelectFrom}&to=${currencySelectTo}&amount=${currencyAmount}`);
      const data = await response.data;
      const from = await data.query['from'];
      const to = await data.query['to'];
      const amount = await data.query['amount'];
      const date = await data.date;
      const result = await data.result;
      const info ={ from: from, to: to, amount: amount, date: date, result: result };
      setValue(info)
    }
    convert();
  }

  return (
    <>
          {/* Currency Form Start */}
          <form action="" method="post">
              <input onChange={handleCurrencyAmount} type="text" name="" id="" placeholder='Amount'/>
              <select onChange={handleCurrencyFrom} name="" id="">
                <option value="" selected disabled>From</option>
                {currencyCode.map((value)=>
                  <option  value={value}>{value}</option>
                )}
              </select>
              <p className='icon'>
                <SiConvertio/>
              </p>
              <select onChange={handleCurrencyTo} name="" id="">
                <option className='option' value="" selected disabled>To</option>
                {currencyCode.map((value)=>
                  <option  value={value}>{value}</option>
                )}
              </select>
              <div className="btn">
                <button onClick={handleCurrencyPrint} type='submit'>See Rate</button>
              </div>
          </form>
          {/* Currency Form End */}
    </>
  )
}
