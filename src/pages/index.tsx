import { Geist, Geist_Mono } from "next/font/google";
import ProductsPage from "./products/products";

export default function Home() {
  return (
    <main>
      <ProductsPage />
    </main>
  );
}
