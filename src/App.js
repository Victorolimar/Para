import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import ListOperadores from "./pages/listOperadores/ListOperadores";
import Single from "./pages/single/Single";
import SingleOperador from "./pages/singleOperador/SingleOperador";
import New from "./pages/new/New";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="clientes">
              <Route index element={<List />} />
              <Route path=":clienteId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Agregar New User" />}
              />
            </Route>
            <Route path="operadores">
              <Route index element={<ListOperadores />} />
              <Route path=":operadorId" element={<SingleOperador />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
