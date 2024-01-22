import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./password.scss";

const PasswordConductor = () => {
  const { state } = useLocation();
  const { operadorId } = useParams();

  const [formData, setFormData] = useState({
    password: "",
  });
  const [visiblePassword, setVisiblePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (state) {
      setFormData({
        ...formData,
        password: state.contraseña || "",
      });
      setVisiblePassword(state.contraseña || "");
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setVisiblePassword(value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://34.234.66.51/api/v1/driver/0/${operadorId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log("Driver successfully updated:", data);

      // Mostrar el mensaje de éxito
      setSuccessMessage("Contraseña actualizada correctamente");
      setIsButtonDisabled(true);
    } catch (error) {
      console.error("Error updating driver:", error);
    }
  };

  return (
    <div>
      <div className="driver-container">
        <h1>Actualizar Contraseña</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Contraseña:
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={visiblePassword}
              onChange={handleChange}
              required
            />
          </label>

          <button type="button" onClick={handleTogglePasswordVisibility}>
            Mostrar/ocultar contraseña
          </button>

          <button type="submit" disabled={!formData.password || isButtonDisabled}>
            Actualiza tu contraseña
          </button>

          {successMessage && <p>{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default PasswordConductor;
