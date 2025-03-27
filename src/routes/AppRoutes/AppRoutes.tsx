import { Route, Routes } from "react-router-dom";
import Home from "../../components/Home/Home";
import SearchPage from "../../pages/SearchPage/SearchPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:value" element={<SearchPage />} />
    </Routes>
  );
}

export default AppRoutes;
