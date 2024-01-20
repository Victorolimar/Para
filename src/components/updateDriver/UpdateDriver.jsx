import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UpdateDriver.scss"

const UpdateDriver = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      last_name: "",
      email: "",
      phone_number: "",
      address: "",
      license_plate: "",
      vehicle_color: "",
      password: "",
    });

    useEffect(() => {
      setFormData({
        ...formData,
        name: state.nombre,
        last_name: state.apellidos,
        email: state.correo,
        phone_number: state.numero,
        address: state.direccion,
        license_plate: state.placa,
        vehicle_color: state.color,
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
        const response = await fetch(`http://34.234.66.51/api/v1/driver/${state.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Driver successfully updated:", data);
        navigate("/operadores");
      } catch (error) {
        console.error("Error updating driver:", error);
      }
    };
  


    return (
        <div>
           <div className="driver-container">
         <h1>Actualiza un conductor</h1>
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
          Dirección:
          <input
            type="text"
            name="address"
            value={formData.address}          
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Placa:
          <input
            type="text"
            name="license_plate"
            value={formData.license_plate}          
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Color del vehículo:
          <input
            type="text"
            name="vehicle_color"
            value={formData.vehicle_color}          
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
        > Actualizar conductor </button>
      </form>
    </div>
  </div>
  );  
}

export default UpdateDriver;
