import LoadingComponent from "../../component/LoadingComponent";
import useCategoriesFetchApi from "../../customHooks/useCategoriesFetchApi";

export default function FetchCategories() {
  const [data, isLoading, isError, error] = useCategoriesFetchApi();

  return (
    <div className="col-sm-12">
      <h1>Fetch: Kategoriler</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}

      <ul className="list-group">
        {data.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
