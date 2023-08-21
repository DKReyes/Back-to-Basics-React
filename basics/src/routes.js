// Routes Page - Adds the routing location to connect other pages.
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Chapter 1 - Index
import Index from "./pages/index";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This is the base page */}
        <Route path="/" element={<Index />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);