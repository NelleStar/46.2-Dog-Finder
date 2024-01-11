import { Routes, Route } from "react-router-dom";
import Dogs from "./Dogs";
import DogProfile from "./DogProfile";
import NotFound from "./NotFound";

function RoutesList() {
  return (
    <Routes>
      <Route path="/dogs" element={<Dogs />} />
      <Route
        path="/dogs/:dogName"
        element={<DogProfile dogs={Dogs.defaultProps.dogs} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesList;
