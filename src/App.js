import DashBoard from "./pages/dashboardPage/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNewDashboardPage from "./pages/createNewDashboard/CreateNewDashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route
          path="/createNewDashboard"
          element={<CreateNewDashboardPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
