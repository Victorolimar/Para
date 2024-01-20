import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./password.scss"

const PasswordCliente = () => {
    const { state } = useLocation();
    const { operadorId } = useParams();

    const [formData, setFormData] = useState({
      password: " ",
    });
    

    useEffect(() => {
        if (state) {
          setFormData({
            ...formData,
            password: state.contraseña || "",
          });
        }
      }, [state]);
      



    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(`http://34.234.66.51/api/v1/driver/${operadorId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Client successfully updated:", data);
      } catch (error) {
        console.error("Error updating driver:", error);
      }
    };
  


    return (
        <div>
           <div className="driver-container">
         <h1>Actualizar Contraseña</h1>
        <form onSubmit={handleSubmit} >
     
        <label>
          Contraseña:
          <input
            type="text"
            name="password"
            value={formData.password}          
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit"
           disabled={
            !formData.password
          }
        > Actualiza tu contraseña  </button>
      </form>
    </div>
  </div>
  );  
}

export default PasswordCliente;
