"use client"
import { books } from "@/app/ProductDetails";
import ProductCardInDetail from "@/components/ui/ProductCardInDetail";
import Book from "@/types/book";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { bookId } = useParams();
  const [myBookDetails, setMyBookDetails] = useState<Book | null>(null);

  const findDetails = () => {
    const bookDetails = books.find((val: Book) => val.isbn === bookId);
    console.log(bookDetails);
    setMyBookDetails(bookDetails || null);
  };

  useEffect(() => {
    findDetails();
  }, [bookId]);

    return <div>{myBookDetails && (
       < ProductCardInDetail {...myBookDetails} />
    )}</div>;
};

export default Page;
