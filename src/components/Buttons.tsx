

const Buttons = ({ setValue, button, value }) => {

   const handleClick = () => {
      if (button === 1) {
         setValue(button);
      } 
   };

   return (
      <button 
         className={`w-[50px] h-[50px] shadow-md rounded-md`}
         onClick={handleClick}
      >
         { button }
      </button>
   )  
}

export default Buttons