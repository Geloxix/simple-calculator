

const Buttons = ({ buttonValue, handleInputNumber}) => {

   return (
      <button 
         className={`w-[50px] h-[50px] shadow-md rounded-md`}
         onClick={() => handleInputNumber(buttonValue)}
      >
         { buttonValue }
      </button>
   )  
}

export default Buttons;