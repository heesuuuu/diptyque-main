import { useState } from 'react';
import CustomSelect from '../../ui/CustomSelect';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../store/modules/productSlice';

const SelectOption = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');
  const { engravingTxt } = useSelector((state) => state.product);

  const selectOptions = [
    { value: '', label: 'Select' },
    { value: 'classic', label: 'Classic (No Engraving)' },
    { value: 'engraving', label: 'Personalize Your Own Bottle (Custom Engraving)' },
  ];

  const changeInput = (e) => {
    const { value } = e.target;
    dispatch(productActions.setEngravingTxt(value));
  };

  return (
    <div>
      <div className="flex flex-col gap-10">
        <div
          className={`relative flex justify-between items-center mt-[60px] tablet:flex-col tablet:mt-5 ${selectedOption === 'engraving' ? 'mb-0' : 'mb-20 tablet:mb-10'}`}
        >
          <p className="w-[30%] pr-6 tablet:w-full tablet:mb-[10px]">Add Personalization</p>
          <div className="w-[70%] h-12 tablet:w-full">
            <CustomSelect
              options={selectOptions}
              defaultValue={''}
              onChange={(option) => {
                setSelectedOption(option.value);
              }}
              className="w-full px-4 py-3"
            />
          </div>
        </div>
        <div className="flex items-center w-full mb-20 ">
          {selectedOption === 'engraving' && (
            <>
              <label htmlFor="customInput" className="w-[30%] pr-6">
                Custom Engraving
              </label>
              <input
                onChange={changeInput}
                type="text"
                name="customInput"
                id="customInput"
                value={engravingTxt}
                placeholder="Your bespoke inscription awaits ..."
                className="w-[70%] px-4 py-3 border border-gray-300 tablet:w-full tablet:mt-[10px]"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectOption;

// <div className="relative flex  justify-between items-center mt-[10px] mb-20 tablet:flex-col tablet:items-start tablet:mb-10"></div>
