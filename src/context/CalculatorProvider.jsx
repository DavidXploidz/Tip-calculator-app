import { createContext } from "react";
import {useState} from 'react'

	const CalculatorContext = createContext()

	const CalculatorProvider = ({children}) => {

		const [bill, setBill] = useState(0)
		const [porcentaje, setPorcentaje] = useState(0)
		const [personas, setPersonas] = useState(0)
		let [tipPerson, setTipPerson] = useState(0)
		let [totalPerson, setTotalPerson] = useState(0)
		const [mostrar, setMostrar] = useState(false)

    	return(
       	 <CalculatorContext.Provider 
            	value={{
					bill,
					setBill,
					porcentaje,
					setPorcentaje,
					personas,
					setPersonas,
					tipPerson,
					setTipPerson,
					totalPerson,
					setTotalPerson,
					mostrar,
					setMostrar
					
           	 }} 
       	 >
           	 {children}
        	</CalculatorContext.Provider>
   	 )
	}



	export {
    	CalculatorProvider
	}

	export default CalculatorContext