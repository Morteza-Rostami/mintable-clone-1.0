import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CategoryCard from './CategoryCard';
import { A11y, Navigation, Pagination, Parallax, Scrollbar } from 'swiper';


const categories = [
  {
    id: 1,
    imgUrl: 'https://www.mintable.app/static/media/category_art.64a30164722b7e0e8787.png',
    name: 'Art',
    subCats: [
      'Abstract Art',
      'Abstract expression',
      'African Art',
      'Animation',
    ]
  },
  {
    id: 2,
    imgUrl: 'https://www.mintable.app/static/media/category_collectibles.ecc59690e7256a67fd81.png',
    name: 'Collectibles',
    subCats: [
      'Aliens',
      'Anime',
      'Art',
      'Cars',
    ]
  },
  {
    id: 3,
    imgUrl: 'https://www.mintable.app/static/media/category_music.58946e5d0c4f85041a5d.png',
    name: 'music',
    subCats: [
      '8Bit',
      'Acid Jazz',
      'Acid Rock',
      'African Heavy Metal',
    ]
  },
  {
    id: 4,
    imgUrl: 'https://www.mintable.app/static/media/category_sports.4934a54914e44f5169cd.png',
    name: 'Sports',
    subCats: [
      'Art',
      'Baseball',
      'Basketball',
      'Collectibles',
    ]
  },
  
  {
    id: 5,
    imgUrl: 'https://www.mintable.app/static/media/category_utility.a122d79e62ae1b7d68d9.png',
    name: 'Utility',
    subCats: [
      'Domain Names',
      'Ebooks',
      'Other',
      'Real estate',
    ]
  },
  {
    id: 6,
    imgUrl: 'https://www.mintable.app/static/media/category_videos.6e88bcc9ff1d38b6fcf6.png',
    name: 'Videos',
    subCats: [
      'Animation',
      'ASMR',
      'challenges',
      'Comedy',
    ]
  },
]

const CatSlider = () => {
  return (
    <Swiper
      className='mySwiper'
      observer={true}
      observeParents={true}
      parallax={true}
      cssMode={true}
      direction='horizontal'
      modules={[Parallax, Navigation, Pagination, Scrollbar, A11y]}
      navigation={true}
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      /* navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }} */

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      {
        categories.length
        ? (
          categories.map(cat => {
            return (
              <SwiperSlide
                key={cat.id}
              >
                <CategoryCard
                  category={cat}
                />
              </SwiperSlide>
            )
          })
        )
        : ('')
      }
    </Swiper>
  );
};

export default CatSlider