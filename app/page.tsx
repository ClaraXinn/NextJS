// import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Hello World</h1>
        <Link href="/users">Users</Link>
        <ProductCard/>
        
      </div>
    </main>
  );
}
