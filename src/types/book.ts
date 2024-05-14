import { ImageProps } from "next/image";

interface Book {
  key: number;
  image: string;
  isbn: string;
  title: string;
  author: string;
  publishedDate: Date;
  pageCount?: number;
  language: string;
  publisher: string;
  summary:string
}

export default Book;
