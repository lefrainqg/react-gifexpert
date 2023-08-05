import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

   const [categories, setCategories] = useState(['One Ponch']);

   const onAddCategory = (newValue) => {
      // setCategories([...categories, 'Valorant']); //al final
      // setCategories(['Valorant', ...categories]); //a inicio
      if (categories.includes(newValue)) return;
      setCategories([newValue, ...categories]); //a inicio
   }

   return (
      <>
         <h1>GiftExpertApp</h1>

         <AddCategory
            // setCategories={setCategories}
            onNewValue={onAddCategory}
         />

         {
            categories.map(category => (
               <GifGrid key={category} category={category} />
            ))
         }

      </>
   )
}
