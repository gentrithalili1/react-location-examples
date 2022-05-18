import { Link } from "@tanstack/react-location";

interface HomeProps {}

function Home(props: HomeProps) {
  return (
    <div>
      <ul>
        <li>
          <Link to="posts" search={{ page: 1, limit: 10 }}>
            Link to posts with query params
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
