import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Parallax, Scrollbar } from 'swiper';
import NftCard from './NftCard';


const cards = [
  {
    id: 1,
    topImg: 'https://s3.us-east-2.amazonaws.com/mintable.app/store_covers/hero-carousel-bg-3.png',
    avatar: 'https://www.mintable.app/static/media/mintable-logo-new.e2bd394114ffcecad16c.png',
    title: 'MineablePunks',
    subTxt: 'A contract that is deployed at: 0x595a8974c1473717c4b5d456350cd594d9bda687',
    stats: [
      {
        name: 'Items',
        num: '3,000',
      },
      {
        name: 'Views',
        num: '2,347',
      },
      {
        name: 'Floor price',
        num: '$76,12',
      },
      {
        name: '7D Volume',
        num: '$16,3M',
      },
    ]
  },
  {
    id: 2,
    topImg: 'https://dgbijzg00pxv8.cloudfront.net/ef4cfa38-77be-4b13-af25-9660ed914b53/0x81ae0be3a8044772d04f32398bac1e1b4b215aa8/0/STORE_BACKGROUND.jpg?v=egkmonn8i&d=343x140',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/ef4cfa38-77be-4b13-af25-9660ed914b53/0x81ae0be3a8044772d04f32398bac1e1b4b215aa8/0/STORE_COVER.jpg?v=rtobp67kb&d=116x116',
    title: 'MineablePunks',
    subTxt: 'A contract that is deployed at: 0x595a8974c1473717c4b5d456350cd594d9bda687',
    stats: [
      {
        name: 'Items',
        num: '3,000',
      },
      {
        name: 'Views',
        num: '2,347',
      },
      {
        name: 'Floor price',
        num: '$76,12',
      },
      {
        name: '7D Volume',
        num: '$16,3M',
      },
    ]
  },
  {
    id: 3,
    topImg: 'https://s3.us-east-2.amazonaws.com/mintable.app/store_covers/hero-carousel-bg-1.png',
    avatar: 'https://www.mintable.app/static/media/mintable-logo-new.e2bd394114ffcecad16c.png',
    title: 'MineablePunks',
    subTxt: 'A contract that is deployed at: 0x595a8974c1473717c4b5d456350cd594d9bda687',
    stats: [
      {
        name: 'Items',
        num: '3,000',
      },
      {
        name: 'Views',
        num: '2,347',
      },
      {
        name: 'Floor price',
        num: '$76,12',
      },
      {
        name: '7D Volume',
        num: '$16,3M',
      },
    ]
  },
  {
    id: 4,
    topImg: 'https://dgbijzg00pxv8.cloudfront.net/ef4cfa38-77be-4b13-af25-9660ed914b53/0xed5af388653567af2f388e6224dc7c4b3241c544/0/STORE_BACKGROUND.jpg?v=6mulkutts&d=343x140',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/ef4cfa38-77be-4b13-af25-9660ed914b53/0xed5af388653567af2f388e6224dc7c4b3241c544/0/STORE_COVER.jpg?v=rvprwt2vr&d=116x116',
    title: 'MineablePunks',
    subTxt: 'A contract that is deployed at: 0x595a8974c1473717c4b5d456350cd594d9bda687',
    stats: [
      {
        name: 'Items',
        num: '3,000',
      },
      {
        name: 'Views',
        num: '2,347',
      },
      {
        name: 'Floor price',
        num: '$76,12',
      },
      {
        name: '7D Volume',
        num: '$16,3M',
      },
    ]
  },
  {
    id: 5,
    topImg: 'https://dgbijzg00pxv8.cloudfront.net/ef4cfa38-77be-4b13-af25-9660ed914b53/0x60e4d786628fea6478f785a6d7e704777c86a7c6/0/STORE_BACKGROUND.jpg?v=is0g9dczb&d=343x140',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/ef4cfa38-77be-4b13-af25-9660ed914b53/0x60e4d786628fea6478f785a6d7e704777c86a7c6/0/STORE_COVER.png?v=boqh6vf15&d=116x116',
    title: 'MineablePunks',
    subTxt: 'A contract that is deployed at: 0x595a8974c1473717c4b5d456350cd594d9bda687',
    stats: [
      {
        name: 'Items',
        num: '3,000',
      },
      {
        name: 'Views',
        num: '2,347',
      },
      {
        name: 'Floor price',
        num: '$76,12',
      },
      {
        name: '7D Volume',
        num: '$16,3M',
      },
    ]
  },
  {
    id: 6,
    topImg: 'https://s3.us-east-2.amazonaws.com/mintable.app/store_covers/hero-carousel-bg-3.png',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/ef4cfa38-77be-4b13-af25-9660ed914b53/0x1dfe7ca09e99d10835bf73044a23b73fc20623df/0/STORE_COVER.jpg?v=kd2kefiud&d=116x116',
    title: 'MineablePunks',
    subTxt: 'A contract that is deployed at: 0x595a8974c1473717c4b5d456350cd594d9bda687',
    stats: [
      {
        name: 'Items',
        num: '3,000',
      },
      {
        name: 'Views',
        num: '2,347',
      },
      {
        name: 'Floor price',
        num: '$76,12',
      },
      {
        name: '7D Volume',
        num: '$16,3M',
      },
    ]
  },
  
]

const Collections = () => {
  return (
    <div
      className='
        collections
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
      Top Collections
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
                <NftCard
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

export default Collections