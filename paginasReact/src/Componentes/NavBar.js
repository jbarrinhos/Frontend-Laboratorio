import { useNavigate } from "react-router-dom";

//se usar o navigate, na pagina da App.js o navbar tem de passar para dentro do BrowserRouter

export function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="botao">
      <header className="headerNav">
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/menu");
          }}
        >
          Menu
        </button>
        <button
          onClick={() => {
            navigate("/contacts");
          }}
        >
          Contacts
        </button>
      </header>
    </div>
  );
}
