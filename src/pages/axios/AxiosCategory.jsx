import { useParams } from "react-router-dom";
import Row from "../../component/Row";
import CatCard from "../../component/CatCard";
import LoadingComponent from "../../component/LoadingComponent";
import useCategoryAxiosApi from "../../axiosCustomHooks/useCategoryAxiosApi";

export default function AxiosCategory() {
  const { categoryName } = useParams();
  const [data, isLoading, isError, error] = useCategoryAxiosApi(categoryName);

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
