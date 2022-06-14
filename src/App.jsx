import {CalculatorProvider} from './context/CalculatorProvider'
import AppCalculator from "./components/AppCalculator"

function App() {
 

  return (
  
    <CalculatorProvider>
      <AppCalculator />
    </CalculatorProvider>
    
  
  )
}

export default App
