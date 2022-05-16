import { Link } from "@tanstack/react-location";
import "./Header.scss";

interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="posts">Posts</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
