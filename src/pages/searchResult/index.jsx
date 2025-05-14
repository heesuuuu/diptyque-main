import { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchForm from '../../components/searchResult/SearchForm';
import SearchList from '../../components/searchResult/SearchList';

const SearchResult = () => {
  const { allProductData } = useSelector((state) => state.product);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const filteredData = allProductData.filter((item) => {
    const notesText = Array.isArray(item.notes) ? item.notes.map((n) => n.note).join(' ') : '';
    const keywordsText = Array.isArray(item.keyword) ? item.keyword.map((k) => k.note).join(' ') : '';

    return [item.name, item.olfactory, notesText, keywordsText].some((field) =>
      field?.toString().replace(/\s+/g, '').toLowerCase().includes(text.replace(/\s+/g, '').toLowerCase())
    );
  });

  return (
    <div className="desktop:max-w-[1360px] w-full mx-auto desktop:px-[80px] tablet:px-6 mobile:px-4 desktop:mb-[300px] tablet:mb-[80px] mobile:mb-[60px] overflow-hidden">
      <SearchForm onChange={onChange} text={text} />
      <SearchList filteredData={filteredData} />
    </div>
  );
};

export default SearchResult;
