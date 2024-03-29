import { useContext } from "react";
import { AppContext } from "../AppContext.jsx";

function InputMetros(){
    const { form, setForm } = useContext(AppContext);

    const handleChange = (event) => {
        

        let metros = parseInt(event.target.value, 10);

        setForm({ ...form, metros });
      };

    return (
        <>
            <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
            <input onChange={handleChange} className="input-group-text border border-dark" type="number" id="metros2" min="20" max="500" required/>
        </>
    )
}

export default InputMetros