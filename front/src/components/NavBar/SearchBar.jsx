/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "./SearchBar.module.css"



export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange=(evento) => {
      setId(evento.target.value);
   }
   const handleSearchClick = () => {
      onSearch(id);
    };
        

   return (
      <div className={styled.div}>
        
         <input 
           className= {styled.input}
            type='search'
            placeholder="Busca un personaje" 
            value ={id} 
            onChange={handleChange}
          
         />
        
         <button 
            className ={styled.button} 
            type="button" 
            onClick= {handleSearchClick}
            >Buscar
            </button>
      </div>
   );
}
