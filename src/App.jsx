import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import Container from "./component/Container";
import Row from "./component/Row";
import FetchCategories from "./pages/fetch/FetchCategories";
import AxiosCategories from "./pages/axios/AxiosCategories";
import RTKQueryCategories from "./pages/rtk-query/RTKQueryCategories";

function App() {
  const API_URL = import.meta.env.VITE_CAT_API_URL;
  console.log("API Url: ", API_URL);

  return (
    <>
      <Navbar />
      <Container className="mt-4 mb-4">
        <Row>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fetch-categories" element={<FetchCategories />} />
            <Route path="/axios-categories" element={<AxiosCategories />} />
            <Route
              path="/rtk-query-categories"
              element={<RTKQueryCategories />}
            />
          </Routes>
        </Row>
      </Container>
    </>
  );
}

export default App;
