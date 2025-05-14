import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const { id, name, description, options, sales, inStock } = item;
  const price = options[0].price;
  const thumbImg = options[0].images.thumbnail.default;
  const hoverImg = options[0].images.thumbnail.hover;

  const maxChars = 110;
  const [desc, setDesc] = useState('');

  useEffect(() => {
    const sentences = description.split('. ');
    let result = '';
    let currentLength = 0;

    // 문장을 하나씩 추가하면서 최대 글자 수 체크
    for (const sentence of sentences) {
      // 마침표와 공백을 포함한 문장 길이
      const sentenceLength = sentence.length + 2; // 마침표와 공백 포함

      // 이 문장을 추가했을 때 최대 글자 수를 초과하는지 확인
      if (currentLength + sentenceLength > maxChars) {
        break;
      }

      // 문장 추가
      if (result) {
        result += '. ' + sentence;
      } else {
        result = sentence;
      }

      currentLength += sentenceLength;
    }

    // 결과 텍스트에 마침표 추가 (없는 경우)
    if (result && !result.endsWith('.')) {
      result += '.';
    }

    setDesc(result);
  }, [description, maxChars]);

  return (
    <Link to={`/product/detail/${id}`} className="relative flex flex-col justify-between gap-2 cursor-pointer">
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
      <h2 className="text-heading3/[160%] tablet:text-heading3-m">{name}</h2>
      <p className="flex-shrink-0 flex-grow text-body3/[150%] tablet:text-body2-m text-grey-4 line-clamp-2 mobile:hidden">
        {desc ? desc : description}
      </p>
      <p className="flex justify-between text-body3/[150%] tablet:hidden">
        {!inStock && 'Out of Stock'}
        <span className="ml-auto tablet:text-body2-m">€{price}</span>
      </p>
      <p className=" text-body2-m desktop:hidden tablet:visible">
        {inStock ? <span className="ml-auto text-body2-m">€{price}</span> : 'Out of Stock'}
      </p>
    </Link>
  );
};

export default ProductCard;
