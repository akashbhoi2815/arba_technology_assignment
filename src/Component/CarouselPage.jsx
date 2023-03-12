import logo from '../logo.svg'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box } from "@chakra-ui/react";
SwiperCore.use([Autoplay, Pagination, Navigation]);


const CarouselPage = () => {
  return (
    <Box>
         <Swiper
          slidesPerView={1}
          spaceBetween={6}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          className="mySwiper"
          loop={true}
        >
          
            <SwiperSlide >
              <img src={logo} alt="" width={"500px"} style={{margin:"25px auto"}}/>
            </SwiperSlide>
            <SwiperSlide >
              <img src={logo} alt="" width={"500px"} style={{margin:"25px auto"}} />
            </SwiperSlide>
            <SwiperSlide >
              <img src={logo} alt="" width={"500px"} style={{margin:"25px auto"}}/>
            </SwiperSlide>
         
        </Swiper>
    </Box>
  )
}

export default CarouselPage