import { Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image';
import Author from './_child/author';

export default function section3() {
    return (
      <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

        <Swiper slidesPerView={2}>
          <SwiperSlide>{Post()}</SwiperSlide>
          <SwiperSlide>{Post()}</SwiperSlide>
          <SwiperSlide>{Post()}</SwiperSlide>
          <SwiperSlide>{Post()}</SwiperSlide>
          <SwiperSlide>{Post()}</SwiperSlide>
        </Swiper>
      </section>
    );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <a>
          <Image
            src={"/images/img1 (2).jpg"}
            width={600}
            height={400}
          />
        </a>
      </div>
      <div className="info">
        <a className="text-orange-500 hover:text-orange-800">
          Business, Travel
        </a>
        <a className="text-gray-500 hover:text-gray-800">-July 3, 2022</a>
      </div>
      <div className="title">
        {/* <Link href={'/'} className="text-3xl md:text-4xl font-bold text-gray-800 hover: text-gray-600"> */}
        <a>Your most unhappy customers are your greatest source of learning</a>
        {/* </Link> */}
      </div>
      <p className="text-gray-500 py-3">
        Even all the powerful Pointing has no control about the branding of the
        product and for the rest of the text please think of something
      </p>
      <Author />
    </div>
  );
}