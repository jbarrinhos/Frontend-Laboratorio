import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Contacts } from "./Componentes/Contacts";
import { HomePage } from "./Componentes/HomePage";
import { Login } from "./Componentes/Login";
import { Menu } from "./Componentes/Menu";
import { NavBar } from "./Componentes/NavBar";

/*é importante ter em atenção aos imports!!
o Route path="/_____" é uma facilitação para depois fazer 
a alteração entre páginas*/

//a minha navBar vai estar sendo partilhada entre todas as paginas
// /* vai sempre ter aquela pagina
//doLogin tem de ir dentro do login
//user={user} para evitar acesso a outras paginas sem o login

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        {user && <NavBar></NavBar>}
        <Routes>
          <Route
            path="/home"
            element={
              <VerificaUser user={user}>
                <HomePage></HomePage>
              </VerificaUser>
            }
          ></Route>
          <Route
            path="/menu"
            element={
              <VerificaUser user={user}>
                <Menu></Menu>
              </VerificaUser>
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <VerificaUser user={user}>
                <Contacts></Contacts>
              </VerificaUser>
            }
          ></Route>
          <Route path="/*" element={<Login doLogin={setUser}></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*export function VerificaUser(user, children) {
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
}*/

//a função de cima é a mais correta!! também evita repetir o "props"

export function VerificaUser(props) {
  if (!props.user) {
    return <Navigate to="/" replace={true} />;
  }
  return props.children;
}

export default App;
