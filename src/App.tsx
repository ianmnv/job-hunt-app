import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import ListJobs from "./pages/ListJobs";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <div data-testid="main">
      <Header />
      <ListJobs />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          {/* <Route path="/" element={<DashBoard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
