import { Link } from "react-router-dom"; // Link de navegação entre páginas
export default function Menu() { // navbar com bootstrap
    return(
        <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
          <div className="container">
            <Link  className="navbar-brand" to="/">Catálogo de Livros</Link>
            <div className="navbar-nav">
                <Link className="nav-link" to="/">Lista de Livros</Link>
                <Link className="nav-link" to="/novo">Adicionar Livro</Link>
            </div>
        </div>
    </nav>

    )

}