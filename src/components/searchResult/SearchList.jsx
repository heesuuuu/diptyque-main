import { ProductCard } from '../../ui';

const SearchList = ({ filteredData }) => {
  return (
    <div className="grid grid-cols-3 mobile:grid-cols-2 gap-6 mobile:gap-4">
      {filteredData.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SearchList;
