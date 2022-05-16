import { Link } from "@tanstack/react-location";

interface QueryParamsProps {}

function QueryParams(props: QueryParamsProps) {
  return (
    <div className="QueryParams">
      <Link to="/query-params">I will navigate to `/query-params`</Link>
      <Link to=".">
        I will navigate up one level in the location hierarchy.
      </Link>
      <Link to="." hash="somehash">
        I will update the hash to `somehash` at the current location
      </Link>
      <Link to="/search" search={{ q: "yes" }}>
        I will navigate to `/search?q=yes`
      </Link>
      <Link
        to="."
        search={{
          someParams: true,
          otherParams: "gogogo",
          object: { nested: { list: [1, 2, 3], hello: "world" } },
        }}
      >
        I will navigate to the current location +
        `?someParams=true&otherParams=gogogo&object=~(nested~(list~(~1~2~3)~hello~%27world))`
      </Link>
      <Link
        search={({ someParams, ...rest }: any) => ({
          ...rest,
          addThis: "This is new!",
        })}
      >
        I will add `addThis='This is new!' and also remove the `someParams`
        param to/from the search params on the current page
      </Link>

      <div className="QueryParams-docs">
        See more:
        <a href="https://react-location.tanstack.com/guides/custom-search-param-serialization">
          https://react-location.tanstack.com/guides/custom-search-param-serialization
        </a>
      </div>
    </div>
  );
}

export default QueryParams;
