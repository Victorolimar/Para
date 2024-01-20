import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import ListOperadores from "./pages/listOperadores/ListOperadores";
import Single from "./pages/single/Single";
import SingleOperador from "./pages/singleOperador/SingleOperador";
import New from "./pages/new/New";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ListViajes from "./pages/listViajes/ListViajes";
import Stadistic from "./pages/statistics/statistics";
import Driver from "./components/newdrivers/driver";
import { AuthContext } from "./context/AuthContext";
import UpdateDriver from "./components/updateDriver/UpdateDriver";
import UpdateClient from "./components/updateClient/UpdateClient";
import PasswordConductor from "./components/password-conductor/Password";
import PasswordCliente from "./components/password-cliente/PasswordCliente";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />

            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route path="Home">
              <Route
                index
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="Login">
              <Route
                index
                element={
                  
                  <Login />
                  
                }
              />
            </Route>

            <Route path="clientes">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />

              <Route
                path=":clienteId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
                <Route 
              path="/clientes/:clienteId/UpdateClienteId"  
                element={     
                  <UpdateClient />
                }
              />
                  <Route 
              path="/clientes/:clienteId/password-cliente"  
                element={     
                  <PasswordCliente />
                }
              />

              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Agregar New User" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="operadores">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListOperadores />
                  </RequireAuth>
                }
              />
              <Route
                path=":operadorId"
                element={
                  <RequireAuth>
                    <SingleOperador />
                  </RequireAuth>
                }
              />
            <Route 
              path="/operadores/:operadorId/UpdateOperadorId"  
                element={     
                <RequireAuth>
                  <UpdateDriver />
                </RequireAuth>
                }
              />
               <Route 
              path="/operadores/:operadorId/password-conductor"  
                element={     
                  <PasswordConductor />
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route
              path="/users/new"
              element={
                <RequireAuth>
                  <Driver />
                </RequireAuth>
              }
            />

            <Route path="viajes">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListViajes />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="Estadistica">
              <Route 
                index 
                element={
                  <RequireAuth>
                      <Stadistic />
                  </RequireAuth>
                  
                } />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
