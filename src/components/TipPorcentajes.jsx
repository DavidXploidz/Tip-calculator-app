import React, { useState } from 'react'
import useCalculator from '../hooks/useCalculator'

const TipPorcentajes = () => {

const { setPorcentaje, porcentaje } = useCalculator()
const [activo, setActivo] = useState(false)
const [activo10, setActivo10] = useState(false)
const [activo15, setActivo15] = useState(false)
const [activo25, setActivo25] = useState(false)
const [activo50, setActivo50] = useState(false)


const cambiarColor = (e) => {
  let resultado = e.currentTarget.dataset.id;
  if(resultado === '5'){
    setActivo(!activo)
    setActivo10(false)
    setActivo15(false)
    setActivo25(false)
    setActivo50(false)
  }
  else if(resultado === '10'){
    setActivo10(!activo10)
    setActivo(false)
    setActivo15(false)
    setActivo25(false)
    setActivo50(false)
  }else if(resultado === '15'){
    setActivo15(!activo15)
    setActivo(false)
    setActivo10(false)
    setActivo25(false)
    setActivo50(false)
  }else if(resultado === '25'){
    setActivo25(!activo25)
    setActivo(false)
    setActivo10(false)
    setActivo15(false)
    setActivo50(false)
  }else if(resultado === '50'){
    setActivo50(!activo50)
    setActivo(false)
    setActivo10(false)
    setActivo15(false)
    setActivo25(false)
  }
}


  return (
    <div className='mt-2'>
        <p>Select Tip %</p>
        <div className='grid-botones'>
            <button onClick={e => { setPorcentaje(e.target.value), cambiarColor(e)} } className={`botones ${activo && 'activo'}`} data-id='5' value={5} >5%</button>
            <button onClick={e => { setPorcentaje(e.target.value), cambiarColor(e)} } className={`botones ${activo10 && 'activo'}`} data-id='10' value={10} >10%</button>
            <button onClick={e => { setPorcentaje(e.target.value), cambiarColor(e)} } className={`botones ${activo15 && 'activo'}`} data-id='15' value={15} >15%</button>
            <button onClick={e => { setPorcentaje(e.target.value), cambiarColor(e)} } className={`botones ${activo25 && 'activo'}`} data-id='25' value={25} >25%</button>
            <button onClick={e => { setPorcentaje(e.target.value), cambiarColor(e)} } className={`botones ${activo50 && 'activo'}`} data-id='50' value={50} >50%</button>
            <input type="tel" className='btn-custom' placeholder='Custom' onChange={e => setPorcentaje(e.target.value)} />
            
          
        </div>
    </div>
  )
}

export default TipPorcentajes