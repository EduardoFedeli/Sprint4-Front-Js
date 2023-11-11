import { Link } from "react-router-dom";
import Logo from "./Imagens/logo sem fundo.png"; // Substitua pelo caminho real da sua imagem

export default function Menu() {
  return (
    <nav className="menu">
      <Link to='/'>
        <img src={Logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
      </Link>
      <span> | </span>
      <Link to='/'>Home</Link>
      <span> | </span>
      <Link to='/produtos'>Produtos</Link>
      <span> | </span>
      <Link to='/armazenamento'>Armazenamento</Link>
    </nav>
  );
}
