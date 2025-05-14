import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SearchItem = () => {
  const location = useLocation();
  const { id, name, description, options, sales, inStock } = item;
  const price = options[0].price;
  const thumbImg = options[0].images.thumbnail.default;
  const hoverImg = options[0].images.thumbnail.hover;

  return (
    <Link
      to={`${location.pathname}/${id}`}
      className="relative flex flex-col justify-between gap-2 cursor-pointer group"
    >
      <img
        className="mb-2 object-cover w-full group-hover:opacity-0 transition-all ease-in-out duration-700"
        src={thumbImg}
        alt={name}
      />
      <img
        className="absolute mb-2 object-cover opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700"
        src={hoverImg}
        alt={name}
      />
      <h2 className="text-heading3/[160%]">{name}</h2>
      <p className="flex-shrink-0 flex-grow text-body3/[150%] text-grey-4 line-clamp-2">{desc ? desc : description}</p>
      <p className="flex justify-between text-body3/[150%]">
        {inStock && 'Out of Stock'}
        <span className="ml-auto">€{price}</span>
      </p>
    </Link>
  );
};

export default SearchItem;
