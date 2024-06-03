import { buttonsValue } from "../constants";
import { useState } from "react";

import Buttons from "./Buttons";

const Calculator = () => {
   const [ value, setValue ] = useState(0);

   return (
      <section className="h-screen flex items-center justify-center">
         <div>
            <h1 className="text-md mb-2">Calculator</h1>
            <div>
               <p className="py-1 text-xl mb-4 border-2 border-zinc-300 rounded-lg pl-2">{ value }</p>
               <div className={`grid grid-cols-4 gap-2 `}>
                  {
                     buttonsValue.map((button, index) => (
                        <Buttons 
                           key={index}
                           button={button} 
                           setValue={setValue} 
                           value={value}
                        />
                     ))
                  }
               </div>
            </div>
         </div>
      </section>
   )
}

export default Calculator;