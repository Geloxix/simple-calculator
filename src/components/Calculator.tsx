import { buttonsValue, operations } from "../constants";
import { useState } from "react";

import Buttons from "./Buttons";

const Calculator = () => {
   const [ inputValue, setInputValue ] = useState<string>('');
   const [ firstNumber, setFirstNumber ] = useState<number | null >(null);
   const [ operation, setOperation ] = useState<string | null>(null);

   const handleInputNumber = (input: string) => {
      setInputValue(prev => prev + input);
   }; 

   const handleOperation = (oper: string) => {
      if (inputValue) { 
         setOperation(oper); 
         setFirstNumber(parseFloat(inputValue));
         setInputValue('');
      } 
      // setInputValue(oper);
   };

   const handleCalculate = () => {
      if (!isNaN(parseFloat(inputValue))) {
         const secondNumber = parseFloat(inputValue);
         let total: number | null = null;

         if (firstNumber !== null) {
            switch (operation) {
               case '+':
                  total = firstNumber + secondNumber;
                  break;
               case '-':
                  total = firstNumber - secondNumber;
                  break;
               case 'x':
                  total = firstNumber * secondNumber;
                  break;
               case '/':
                  total = firstNumber / secondNumber;
                  break;
               default:
                  break;
            }
         }

         if (total !== null) {
            setInputValue(total.toString());
            setFirstNumber(null);
            setOperation(null);
         }
         
      }
   };

   const handleClear = () => {
      setInputValue('');
   };

   return ( 
      <section className="h-screen flex items-center justify-center">
         <div>
            <p className="text-md mb-2">Calculator</p>
            <div>
               <input 
                  className="py-1 text-xl mb-4 border-2 border-zinc-300 rounded-lg pl-2 h-[40px]" 
                  readOnly
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)} 
               />
               <div className={`grid grid-cols-4 gap-2 `}>
                  {
                     buttonsValue.map((buttonValue, index) => (
                        <Buttons 
                           key={index}
                           buttonValue={buttonValue} 
                           handleInputNumber={handleInputNumber}
                        />
                     ))
                  }
                  {
                     operations.map((operation, index) => (
                        <button
                           key={index}
                           className="w-[50px] h-[50px] shadow-md rounded-md"
                           onClick={() => handleOperation(operation)}
                        >
                           { operation}
                        </button>
                     ))
                  }
                  <button
                     onClick={handleCalculate}
                     className="w-[50px] h-[50px] shadow-md rounded-md"
                  >
                     =
                  </button>
                  <button
                     className="w-[50px] h-[50px] shadow-md rounded-md"
                     onClick={handleClear}
                  >
                     C
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Calculator;