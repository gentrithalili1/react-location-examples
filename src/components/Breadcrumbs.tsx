import { useMatches, Link } from "@tanstack/react-location";

interface BreadcrumbsProps {}

function Breadcrumbs(props: BreadcrumbsProps) {
  const matches = useMatches();
  return (
    <ul className="Breadcrumbs">
      {matches
        .filter((match) => match?.route?.meta?.breadcrumb)
        .map((match: any) => (
          <li key={match.pathname}>
            <Link to={match.pathname}>
              {match.route.meta!.breadcrumb(match.params)}
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default Breadcrumbs;
