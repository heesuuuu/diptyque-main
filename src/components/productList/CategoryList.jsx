import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategoryItem from './CategoryItem';
import { useEffect, useState } from 'react';

const CategoryList = () => {
  const param = useParams();
  const { categoryData, olfactoryData, selectedOlfactory } = useSelector((state) => state.category);
  const { categoryName } = param;
  const [displayData, setDisplayData] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (selectedOlfactory && olfactoryData.length > 0) {
      setDisplayData(olfactoryData);
      setNoResults(false);
    } else if (selectedOlfactory && olfactoryData.length === 0) {
      setDisplayData([]);
      setNoResults(true);
    } else {
      setDisplayData(categoryData);
      setNoResults(false);
    }
  }, [olfactoryData, categoryData, selectedOlfactory]);

  return (
    <>
      <div className="grid grid-cols-3  mobile:grid-cols-2 gap-10 tablet:gap-6 mobile:gap-4">
        {noResults ? (
          <div className="col-span-3 text-center py-10">No Result</div>
        ) : (
          displayData.map((item) => <CategoryItem key={item.id} item={item} category={categoryName} />)
        )}
      </div>
    </>
  );
};

export default CategoryList;
