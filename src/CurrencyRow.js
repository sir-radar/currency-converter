import React from 'react'

const CurrencyRow = (props) => {
  const {
    currencyOptions, 
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount
  } = props

  return (
    <div>
      <input className="input" type="number" value={amount.toString()} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {
          currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))
        }
      </select>
    </div>
  )
}

export default CurrencyRow