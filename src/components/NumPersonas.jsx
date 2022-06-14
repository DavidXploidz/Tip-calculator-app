import React from 'react'
import useCalculator from '../hooks/useCalculator'
import iconPerson from '../images/icon-person.svg'
const NumPersonas = () => {

const { personas, setPersonas, setMostrar, bill, porcentaje, setTotalPerson, setTipPerson } = useCalculator()


const calcularTotal = () => {
    let tipTotal = (bill * porcentaje) / 100
    let tipTemp = tipTotal / personas
    setTipPerson(tipTotal / personas) 
    setTotalPerson((bill / personas) + tipTemp)
    setMostrar(true)
}
  return (
    <div className='mt-2'>
        <p>Number of People</p>
        <div className='div-people'>
            <img src={iconPerson} alt="Icon person" className='icon' />
            <input type="tel" placeholder='0' className='input-people' onChange={(e) => { setPersonas(e.target.value) }} onKeyUp={calcularTotal}/>
        </div>
    </div>
  )
}

export default NumPersonas