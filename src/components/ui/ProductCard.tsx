import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  title: string;
  isbn: string;
  author: string;
  language: string;
  publisher: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  isbn,
  author,
  language,
  publisher,
  image,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 w-full max-w-5xl mx-auto">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="w-full h-56 relative">
            <Image
              src={image}
              alt="hi"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h2>
            <p className="text-gray-600 mb-2">ISBN: {isbn}</p>
            <p className="text-gray-600 mb-2">Author: {author}</p>
            <p className="text-gray-600 mb-2">Language: {language}</p>
            <p className="text-gray-600 mb-2">Publisher: {publisher}</p>
          </div>
          <div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              <Link href={`/books/${isbn}`}>Read more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
