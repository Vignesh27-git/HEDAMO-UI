import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import ProductDetail from './Pages/ProductDetail'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
