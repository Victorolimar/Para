import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./driver.scss";


const Driver = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    profile_picture: {
      url: "",
      public_id: "",
    },
    rating: 0,
    name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    verified: false,
    availability: false,
    is_occupied: false,
    average_rating: 0,
    license_plate: "",
    vehicle_color: "",
    password: "",
  });

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
      const response = await fetch("http://34.234.66.51/api/v1/driver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Driver successfully created:", data);
      navigate("/operadores");
    } catch (error) {
      console.error("Error creating driver:", error);
    }
  };

  return (
    <div className="driver-container"> 
      <h1>Crear un conductor</h1>
      <form onSubmit={handleSubmit}>
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
          Licencia:
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

        

        <button
          type="submit"
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.phone_number ||
            !formData.password
          }
        >
          Crear conductor
        </button>
      </form>
    </div>
  );
};

export default Driver;
