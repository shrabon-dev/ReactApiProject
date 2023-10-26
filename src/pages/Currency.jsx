import React from 'react'
import Currency from '../component/Currency'
import ShowCurrency from '../component/ShowCurrency'

export default function CurrencyPage() {
  return (
    <>
        <div className='container'>
            <div className="flex justify-between">
              <Currency/>
              <ShowCurrency/>
            </div>
        </div>
    </>
  )
}
