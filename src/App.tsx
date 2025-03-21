import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import DashBoard from "./pages/DashBoard";
import EachJob from "./components/EachJob";

function App() {
  return (
    <>
      <Header />
      <EachJob />

      <BrowserRouter>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            {/* <Route path="/" element={<DashBoard />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
