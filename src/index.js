import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
