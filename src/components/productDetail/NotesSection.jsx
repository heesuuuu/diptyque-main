import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import './style.scss';

const NotesSection = () => {
  const { matchingNotesData } = useSelector((state) => state.product);

  return (
    <div className="flex flex-col w-full my-sec-gap-pc overflow-hidden tablet:my-sec-gap-t mobile:my-sec-gap-m">
      <h2 className="detail-sec-title">Story of Our Blend</h2>

      <Swiper
        breakpoints={{
          390: { slidesPerView: 2.2, spaceBetween: 16 },
          768: { slidesPerView: 3.2, spaceBetween: 24 },
          1024: { slidesPerView: 'auto', spaceBetween: 24 },
        }}
        freeMode={true}
        modules={[FreeMode]}
        className={`mySwiper notes-swiper ${matchingNotesData.length > 3 ? 'tablet-notes-start' : ''} ${matchingNotesData.length > 2 ? 'mobile-notes-start' : ''}`}
      >
        {matchingNotesData.map((data) => (
          <SwiperSlide key={data.noteId}>
            <div>
              <img src={data.img} alt={data.note} />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NotesSection;
