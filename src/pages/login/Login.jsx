import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// Importa tu imagen de logo aquí
import logo from './icon.png';

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navigate("/Home");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <div className="logo-container">
        <img src={logo} alt="Logo"className="logo-image" />
      </div>
      <form onSubmit={handleLogin}>
        <p>Bienvenido, por favor ingrese su correo y contraseña:</p>
        <input
          type="email"
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
        {error && <span>Correo o contraseña incorrecta!</span>}
      </form>
    </div>
  );
};

export default Login;
