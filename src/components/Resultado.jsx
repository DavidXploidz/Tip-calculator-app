import {useState, useEffect} from 'react'
import useCalculator from '../hooks/useCalculator'

const Resultado = () => {

const {setBill, setPorcentaje, setPersonas, tipPerson, setTipPerson, totalPerson, setTotalPerson, mostrar, setMostrar} = useCalculator()

const resetApp = () => {
    setBill(0)
    setPorcentaje(0)
    setPersonas(0)
    setTipPerson(0)
    setTotalPerson(0)
    setMostrar(false)
    window.location.reload(true);
}



  return (
    <div className='div-resultado'>
        <div className='resultado-flex'>
            <p className='tip-amount'>Tip Amount <span>/ person</span></p>
            <p className='big-resultado'>{mostrar ? tipPerson.toFixed(2) : '$0.00'}</p>
        </div>
        <div className='resultado-flex'>
            <p className='tip-amount'>Total <span>/ person</span></p>
            <p className='big-resultado'>{mostrar ? totalPerson.toFixed(2): '$0.00'}</p>
        </div>
        <button className='btn-reset' onClick={resetApp}>Reset</button>
    </div>
  )
}

export default Resultado