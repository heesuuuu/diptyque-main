import React from 'react';
import { Link } from 'react-router-dom';

const PopularItem = ({ product }) => {
  if (!product || !product.options || product.options.length === 0) {
    return null;
  }

  const { id, name, options, type, category } = product;
  const price = options[0].price;
  const size = options[0].size;
  const thumbImg = options[0].images.thumbnail.default;
  const hoverImg = options[0].images.thumbnail.hover || thumbImg;

  return (
    <>
      <Link
        to={`/product/detail/${id}`}
        className="relative flex flex-col justify-between gap-[0.625rem] cursor-pointer group"
      >
        <img
          className="object-cover w-full h-[31.5rem] group-hover:opacity-0 transition-all ease-in-out duration-700"
          src={thumbImg}
          alt={name}
        />
        <img
          className="absolute object-cover opacity-0 w-full h-[31.5rem] group-hover:opacity-100 transition-all ease-in-out duration-700"
          src={hoverImg}
          alt={name}
        />
        <h2 className="text-heading3/[160%] mt-[.375rem]">{type}</h2>
        <p className="flex justify-between text-body3/[150%]">
          {name}
          <span className="ml-auto">
            {size ? `${size} | ` : ''}€{price}
          </span>
        </p>
      </Link>
    </>
  );
};

export default PopularItem;
