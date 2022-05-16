import { Link } from "@tanstack/react-location";

function getActiveProps() {
  return { className: "active" };
}

interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <header>
      <ul>
        <li>
          <Link getActiveProps={getActiveProps} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link getActiveProps={getActiveProps} to="posts">
            Posts
          </Link>
        </li>
        <li>
          <Link getActiveProps={getActiveProps} to="about">
            About
          </Link>
        </li>
        <li>
          <Link getActiveProps={getActiveProps} to="query-params">
            QueryParams
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
