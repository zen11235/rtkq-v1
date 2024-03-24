import { useParams } from "react-router-dom";
import useCategoryFetchApi from "../../customHooks/useCategoryFetchApi";
import Row from "../../component/Row";
import CatCard from "../../component/CatCard";
import LoadingComponent from "../../component/LoadingComponent";

export default function FetchCategory() {
  const { categoryName } = useParams();
  const [data, isLoading, isError, error] = useCategoryFetchApi(categoryName);

  console.log(data);

  return (
    <div className="col-sm-12">
      <h1>Fetch: Kategori</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}

      <Row className="row-cols-sm-3">
        {data.map((item) => (
          <CatCard key={item.id} imgSrc={item.url} />
        ))}
      </Row>
    </div>
  );
}
