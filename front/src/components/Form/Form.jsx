import { useState } from "react"
import validation from "./Validation"

const Form = ({login})=>{

    const [errors, setErrors] = useState({})

    
    const [userData, setUserData] = useState({
        email:'', 
        password: ''
    })
    
    
    const handleChange = (event) => {
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

        const handleSubmit = (event) => {
            event.preventDefault()
            login(userData)
        }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor= "email"> Email: </label>
            <input 
                value={userData.email}   
                type="email" 
                name="email" 
                onChange={handleChange}/>

            {errors.email && <p> {errors.email}</p>}
            {/* //si en el estado errors hay una propiedad emial, entonces mostrala */}
            <br/>
            <label htmlFor= "pasword">Password: </label>
            <input 
                value={userData.password}
                type="password"     
                name="password" 
                onChange={handleChange}/>

            {errors.pasword && <p> {errors.password}</p>}        

           <br/>
            <button type="submit"> Submit </button>

        </form>
    )

}
export default Form