import { useState } from "react"


export const AddCategory = ({ onNewValue }) => {

   const [inputValue, setInputValue] = useState('');

   const onInputChange = ({ target }) => {
      setInputValue(target.value);
   }

   const onSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim().length === 0) return;
      // onNewValue(categories => [inputValue.trim(), ...categories]);
      onNewValue(inputValue.trim());
      setInputValue('');
   }

   return (
      <form onSubmit={onSubmit}>
         <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
         />
      </form>
   )
}
