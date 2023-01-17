import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (argument) => {
  const location = useLocation();
  return (
    (new URLSearchParams(location.search)).get(argument)
  );
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  return ({ key, value }) => {
    if (value !== undefined) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    history.push(`${location.pathname}?${(searchParams).toString()}`)
  }
};