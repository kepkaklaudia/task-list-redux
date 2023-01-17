import { useLocation } from "react-router-dom";
import { Details } from "../../../../common/Section/styled";
import { Input } from "./../../Input/styled";

const Search = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  return (<>
    <Details>
      <Input
      />
    </Details>
  </>
  );
};

export default Search;