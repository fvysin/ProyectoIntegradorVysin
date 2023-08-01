import { Link } from "react-router-dom";

export default function Card({id, onClose, name, status, species, gender, origin, image}) {
   return (
      <div>
         <button onClick= {()=>onClose(id)} >X</button>
         <img src ={image} alt={name} />

         <Link to={`/detail/${id}`} >
            <h3 className={name}>{name}</h3>
         </Link>

         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin} </h2>
      </div>
   );
} 









