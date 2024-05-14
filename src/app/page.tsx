import Banner from "@/components/ui/Banner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductCard from "../components/ui/ProductCard";
import { books } from "./ProductDetails";
import Book from "@/types/book";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto gap-6 scroll-smooth">
        {books.map((book: Book, index: number) => {
          return (
            <div key={index}>
              <ProductCard
                title={book.title}
                isbn={book.isbn}
                author={book.author}
                language={book.language}
                publisher={book.publisher}
                image={book.image}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
