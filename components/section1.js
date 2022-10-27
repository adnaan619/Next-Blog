import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from 'swiper';

export default function section1() {

  SwiperCore.use([Autoplay])

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                      delay: 2000,
                  }}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
        {/* {Slide()} */}
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        {/* <Link href={"/"}> */}
        <a>
          <Image src={"/images/img1 (2).jpg"} width={600} height={600} />
        </a>
        {/* </Link> */}
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          {/* <Link legacyBehavior href={"/"}> */}
          <a className="text-orange-500 hover:text-orange-800">
            Business, Travel
          </a>
          {/* </Link> */}
          {/* <Link legacyBehavior href={"/"}> */}
          <a className="text-gray-500 hover:text-gray-800">-July 3, 2022</a>
          {/* </Link> */}
        </div>
        <div className="title">
          {/* <Link href={'/'} className="text-3xl md:text-6xl font-bold text-gray-800 hover: text-gray-600"> */}
          <a>Your most unhappy customers are your greatest source of learning</a>
          {/* </Link> */}
        </div>
        <p className="text-gray-500 py-3">
          Even all the powerful Pointing has no control about the branding of
          the product and for the rest of the text please think of something
        </p>
        <Author />
      </div>
    </div>
  );
}
