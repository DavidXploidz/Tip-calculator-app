import React from 'react'
import Bill from './Bill'
import NumPersonas from './NumPersonas'
import Resultado from './Resultado'
import TipPorcentajes from './TipPorcentajes'
import logo from '../images/logo.svg'

const AppCalculator = () => {
  return (
    <div className='contenedor'>
        <img src={logo} alt="Logo" className='logo' />
        <div className='caja'>
          <div>
            <Bill />
            <TipPorcentajes />
            <NumPersonas />
          </div>
           
            <Resultado />
        </div>
    </div>
    
  )
}

export default AppCalculator