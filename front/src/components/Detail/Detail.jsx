import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function Detail(name, status, species, gender, origin, image){
    const { id } = useParams()

    const [character, setCharacter] = useState([])
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).
        then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div>
         { character && <h2>{character.name}</h2>}
         { character && <h2>{character.status}</h2>}
         { character && <h2>{character.species}</h2>}
         { character && <h2>{character.gender}</h2>}
         { character && <h2>{character.origin.name}</h2>}
         <img src ={character.image} alt={character.name} />
            
        </div>
    )
}