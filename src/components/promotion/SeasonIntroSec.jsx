import React, { useState, useEffect } from 'react';

const SeasonIntroSec = () => {
  const [hoveredSeason, setHoveredSeason] = useState('Spring');
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  const [currentImageAlt, setCurrentImageAlt] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const SesonItem = [
    {
      title: 'Spring',
      series: 'Floral Series',
      day: 'March-May',
      note: 'Rose',
      img: [
        {
          id: 'spring1',
          url: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/Promotion/c-01.png?raw=true',
          alt: '색상 장미',
          type: 'color',
        },
        {
          id: 'spring2',
          url: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/Promotion/m-d-s01.png?raw=true',
          alt: '드로잉 장미',
          type: 'drawing',
        },
      ],
    },
    {
      title: 'Summer',
      series: 'Citrus Series',
      day: 'June - August',
      note: 'Orange Blossom',
      img: [
        {
          id: 'summer1',
          url: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/Promotion/c-02.png?raw=true',
          alt: '색상 오렌지',
          type: 'color',
        },
        {
          id: 'summer2',
          url: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/Promotion/m-d-s02.png?raw=true',
          alt: '드로잉 오렌지 과일',
          type: 'drawing',
        },
      ],
    },
    {
      title: 'Autumn',
      series: 'Wood Series',
      day: 'September-November',
      note: 'Wood',
      img: [
        {
          id: 'wood1',
          url: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/Promotion/c-03.png?raw=true',
          alt: '색상 나무',
          type: 'color',
        },
        {
          id: 'wood2',
          url: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/Promotion/m-d-a01.png?raw=true',
          alt: '드로잉 나무',
          type: 'drawing',
        },
      ],
    },
    {
      title: 'Winter',
      series: 'Musk Series',
      day: 'January-February',
      note: 'Musk',
      img: [
        {
          id: 'musk1',
          url: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/Promotion/c-04.png?raw=true',
          alt: '색상 머스크',
          type: 'color',
        },
        {
          id: 'musk2',
          url: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/Promotion/m-d-w01.png?raw=true',
          alt: '드로잉 머스크 꽃',
          type: 'drawing',
        },
      ],
    },
  ];

  const getImage = (seasonTitle, type) => {
    const season = SesonItem.find((item) => item.title === seasonTitle);
    if (season) {
      const image = season.img.find((img) => img.type === type);
      return image ? image : null;
    }
    return null;
  };

  const getColorImageUrl = (seasonTitle) => {
    const image = getImage(seasonTitle, 'color');
    return image ? image.url : '';
  };

  const getColorImageAlt = (seasonTitle) => {
    const image = getImage(seasonTitle, 'color');
    return image ? image.alt : '';
  };

  const scrollToSection = (seasonTitle) => {
    const sectionId = `section-${seasonTitle.toLowerCase()}`;
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setCurrentImageUrl(getColorImageUrl('Spring'));
    setCurrentImageAlt(getColorImageAlt('Spring'));
  }, []);

  useEffect(() => {
    const newImageUrl = getColorImageUrl(hoveredSeason);

    if (newImageUrl !== currentImageUrl) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setCurrentImageUrl(newImageUrl);
        setCurrentImageAlt(getColorImageAlt(hoveredSeason));

        setTimeout(() => {
          setIsTransitioning(false);
        }, 5);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [hoveredSeason]);

  return (
    <div className="flex justify-between mx-[50px] tablet:mx-[30px] mobile:mx-[16px]">
      {/* Left  */}
      <div className="w-[45%] tablet:hidden mobile:hidden mr-[5%]">
        <div className="flex flex-col justify-between h-[690px] w-full">
          <img
            src="https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/Promotion/item-line01.png?raw=true"
            alt="Decorative line"
            className="w-full"
          />
          <div className="flex items-center justify-center">
            <img
              src={currentImageUrl}
              alt={currentImageAlt}
              className={`max-h-[300px] transition-opacity duration-200 ease-in-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
          <img
            src="https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/Promotion/item-line01.png?raw=true"
            alt="Decorative line"
            className="w-full"
          />
        </div>
      </div>

      {/* Right  */}
      <div className="w-[55%] tablet:w-full mobile:w-full">
        {SesonItem.map((item) => (
          <div
            key={item.title}
            className={`border-t-[1px] border-solid ${
              hoveredSeason === item.title ? 'border-primary' : 'border-lightgrey-3'
            } cursor-pointer transition-colors duration-300`}
            onMouseEnter={() => setHoveredSeason(item.title)}
            onClick={() => scrollToSection(item.title)}
          >
            <div className="flex items-start mt-5 mb-11 tablet:hidden mobile:hidden">
              {/* Season 정보 */}
              <div className="flex flex-1 gird ">
                <div
                  className={`font-diptyque text-display2 w-[60%]  transition-colors duration-300 ${
                    hoveredSeason === item.title ? 'text-primary' : 'text-black'
                  }`}
                >
                  {item.title}
                </div>
                <div
                  className={`transition-colors duration-300 justify-self-stretch space-y-[10px] ${
                    hoveredSeason === item.title ? 'text-primary' : 'text-black'
                  }`}
                >
                  <div>{item.series}</div>
                  <div>{item.day}</div>
                </div>
              </div>
            </div>

            {/* tablet,mobile seasonIntroSec layout */}
            {/* left */}
            <div className="hidden tablet:flex mobile:flex items-center mt-5 mb-8 mobile:my-6">
              <div className="w-full h-auto mr-4 flex justify-center">
                <img
                  src={getColorImageUrl(item.title)}
                  alt={`${item.title} illustration`}
                  className="object-contain max-w-full max-h-[190px] w-auto tablet:w-[200px] mobile:max-h-[119px] "
                />
              </div>

              {/* right */}
              <div className="w-3/4">
                <div
                  className={`font-diptyque text-heading1 mobile:text-heading2 transition-colors duration-300 ${
                    hoveredSeason === item.title ? 'text-primary' : 'text-black'
                  }`}
                >
                  {item.title}
                </div>
                <div
                  className={`transition-colors duration-300 mt-2 space-y-[5px] mobile:space-y-[2px] text-body2 mobile:text-body3 ${
                    hoveredSeason === item.title ? 'text-primary' : 'text-black'
                  }`}
                >
                  <div>{item.series}</div>
                  <div>{item.day}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonIntroSec;
