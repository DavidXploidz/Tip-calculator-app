import React from 'react'
import useCalculator from '../hooks/useCalculator'
import iconDollar from '../images/icon-dollar.svg'
const Bill = () => {

    const { setBill } = useCalculator()

  return (
    <div>
        <p>Bill</p>
        <div className='div-people'>
            <img src={iconDollar} alt="Icon person" className='icon' />
            <input type="tel" placeholder='0' className='input-people' onChange={e => setBill(e.target.value)}  />
        </div>
    </div>
  )
}

export default Bill