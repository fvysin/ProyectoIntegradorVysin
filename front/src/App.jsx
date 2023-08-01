import './App.css';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import NavBar from './components/SearchBar/NavBar';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) =>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };
   
   const onClose = (id)=>{
      setCharacters(
         characters.filter(char => {
            return char.id !== Number(id)
         })
      )
   };
   
   return (
      <div className='App'>
         <NavBar onSearch ={onSearch} />
         <Routes>
            <Route 
               path= "/home"
               element= {<Cards characters={characters} onClose={onClose} />} />
         
            <Route 
               path= "/about" 
               element= {<About />} />
            
            <Route 
               path= "/detail/:id" 
               element= {<Detail/>}/>
         
         </Routes>
      
      </div>
   );
}




export default App;
