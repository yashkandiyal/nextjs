import Image from "next/image";
import React from "react";

interface ProductProps {
  image: string;
  title: string;
  author: string;
  pageCount?: number;
  summary: string;
}

const ProductCardInDetail: React.FC<ProductProps> = ({
  image,
  title,
  author,
  pageCount,
  summary,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center p-4 my-10 scroll-smooth">
      <div className="flex flex-col items-center justify-between w-full md:w-1/2 mb-4">
        <div className="relative w-full h-60 md:w-80 md:h-96 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">Author: {author}</p>
          {pageCount && (
            <p className="text-gray-600 mb-2">Pages: {pageCount}</p>
          )}
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      <div className="w-full md:w-1/2">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
          Summary:
        </h3>
        <p className="text-gray-600 text-left">{summary}</p>
      </div>
    </div>
  );
};

export default ProductCardInDetail;
