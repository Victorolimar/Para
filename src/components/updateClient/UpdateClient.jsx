import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UpdateClient.scss"

const UpdateClient = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
    });

    useEffect(() => {
      setFormData({
        ...formData,
        name: state.nombre,
        last_name: state.apellidos,
        email: state.correo,
        phone_number: state.numero,
        password: state.contraseña,
      });
    }, [state]);

    console.log("Información en UpdateDriver:", state);

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
        const response = await fetch(`http://34.234.66.51/api/v1/client/${state.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Driver successfully updated:", data);
        navigate("/clientes");
      } catch (error) {
        console.error("Error updating driver:", error);
      }
    };
  


    return (
        <div>
           <div className="driver-container">
         <h1>Actualiza un Cliente</h1>
        <form onSubmit={handleSubmit} >
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Apellidos:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}      
            onChange={handleChange}    
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}          
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Teléfono:
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}   
            onChange={handleChange}       
            required
          />
        </label>

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
            !formData.name ||
            !formData.email ||
            !formData.phone_number ||
            !formData.password
          }
        > Actualizar Cliente </button>
      </form>
    </div>
  </div>
  );  
}

export default UpdateClient;
