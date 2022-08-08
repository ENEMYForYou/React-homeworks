import queryString from "query-string";

export default function getQueryParams(searchQuery) {
  return queryString.parse(searchQuery);
}
