import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import ListJobs from "./pages/ListJobs";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <div data-testid="app-container">
      <Header />
      <ListJobs />

      <BrowserRouter>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            {/* <Route path="/" element={<DashBoard />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
