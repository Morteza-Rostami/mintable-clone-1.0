import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Parallax, Scrollbar } from 'swiper';
import NewCard from './NewCard';

const cards = [
  {
    id: 1,
    topImg: 'https://lilib4u.files.wordpress.com/2021/05/image-1.jpeg',
    coll: 'coredapp',
    name: 'coredapp 1',
  },
  {
    id: 2,
    topImg: 'https://cdn.dribbble.com/users/45368/screenshots/16380896/media/c899e035255b3f8a4e11464deeacf73e.jpg?compress=1&resize=400x300&vertical=top',
    coll: 'coredapp',
    name: 'coredapp 1',
  },
  {
    id: 3,
    topImg: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg',
    coll: 'coredapp',
    name: 'coredapp 1',
  },
  {
    id: 4,
    topImg: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149619508.jpg',
    coll: 'coredapp',
    name: 'coredapp 1',
  },
  {
    id: 5,
    topImg: 'https://ezway.s3.amazonaws.com/jondo/nft/nft-header-3.jpg',
    coll: 'coredapp',
    name: 'coredapp 1',
  },
  {
    id: 6,
    topImg: 'https://ezway.s3.amazonaws.com/jondo/nft/nft-header-2.jpg',
    coll: 'coredapp',
    name: 'coredapp 1',
  },
  {
    id: 7,
    topImg: 'https://www.accesswire.com/users/newswire/images/703428/vKPdMdY3SQmB1ZYHCjy5fdiaSm-4dZtuVPH5ndnDrbuCPdtHE8X_ECRnh8S0Nialn5K9qJYUwpab-KG1T93rdQyi4pMCkuJG4MbETgHYXh8_PW3Yh8vlTQXeElApKEDA8ilvCMLT4dXFMTifHg.jpg',
    coll: 'coredapp',
    name: 'coredapp 1',
  },
]

const Newest = () => {
  return (
    <div
      className='
        newest
        px-4
        mb-10
      '
    >
    <h2
      className='
        mb-3
        text-2xl font-bold
      '
     
    >
      Newest NFTs
    </h2>
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
      //slidesPerView={1}
      //pagination={{ clickable: true }}
      pagination={false}
      //scrollbar={{ draggable: true }}
      /* navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }} */
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      {
        cards.length
        ? (
          cards.map(card => {
            return (
              <SwiperSlide
                key={card.id}
              >
                <NewCard
                  card={card}
                />
              </SwiperSlide>
            )
          })
        )
        : ('')
      }
    </Swiper>
    </div>

  );
};

export default Newest