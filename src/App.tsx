import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Patents = lazy(() => import("./pages/Patents"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patents" element={<Patents />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
