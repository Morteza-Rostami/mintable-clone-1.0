import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Parallax, Scrollbar } from 'swiper';
import PromoCard from './PromoCard';

const cards = [
  {
    id: 1,
    topImg: 'https://absatzwirtschaft-1cf93.kxcdn.com/wp-content/uploads/2022/05/how-to-nft-c-Adidas-1-1024x676.jpg',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/Profile/PROFILE_3fdbda72-ab5c-4a72-a11e-bb8036dfbc4e.png?v=1685476572657&d=78x78',
    userName: 'ifrrri',
    views: 34,
    coll: 'MineablePunks',
    name: 'test gasless',
    price: '$7.91',
    subPrice: '($7.91)'
  },
  {
    id: 2,
    topImg: 'https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w996_r0.9975262832405689_fpx44.98_fpy48.86.jpg',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/Profile/PROFILE_3fdbda72-ab5c-4a72-a11e-bb8036dfbc4e.png?v=1685476572657&d=78x78',
    userName: 'ifrrri',
    views: 34,
    coll: 'MineablePunks',
    name: 'test gasless',
    price: '$7.91',
    subPrice: '($7.91)'
  },
  {
    id: 3,
    topImg: 'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/Profile/PROFILE_3fdbda72-ab5c-4a72-a11e-bb8036dfbc4e.png?v=1685476572657&d=78x78',
    userName: 'ifrrri',
    views: 34,
    coll: 'MineablePunks',
    name: 'test gasless',
    price: '$7.91',
    subPrice: '($7.91)'
  },
  {
    id: 4,
    topImg: 'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square.jpg',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/Profile/PROFILE_3fdbda72-ab5c-4a72-a11e-bb8036dfbc4e.png?v=1685476572657&d=78x78',
    userName: 'ifrrri',
    views: 34,
    coll: 'MineablePunks',
    name: 'test gasless',
    price: '$7.91',
    subPrice: '($7.91)'
  },
  {
    id: 5,
    topImg: 'https://nftnow.com/wp-content/uploads/2022/12/bored-ape-7495.png',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/Profile/PROFILE_3fdbda72-ab5c-4a72-a11e-bb8036dfbc4e.png?v=1685476572657&d=78x78',
    userName: 'ifrrri',
    views: 34,
    coll: 'MineablePunks',
    name: 'test gasless',
    price: '$7.91',
    subPrice: '($7.91)'
  },
  {
    id: 6,
    topImg: 'https://e0.pxfuel.com/wallpapers/35/950/desktop-wallpaper-quick-saves-ideas-art-digital-art-rare-baseball-cards-nft-monkey.jpg',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/Profile/PROFILE_3fdbda72-ab5c-4a72-a11e-bb8036dfbc4e.png?v=1685476572657&d=78x78',
    userName: 'ifrrri',
    views: 34,
    coll: 'MineablePunks',
    name: 'test gasless',
    price: '$7.91',
    subPrice: '($7.91)'
  },
  
]

const Promoted = () => {
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
      Promoted Creations
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
                <PromoCard
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

export default Promoted