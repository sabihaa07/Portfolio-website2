import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:"Lorem ipsum,dolor sit amet consectetur adipisicing elit.Rerum recusandae, natus ea ipsam facere quaerat cum doloribus. Molestias a, hic, velit quas beatae sequi quidem architecto, in perspiciatis ut dolore!",
  },
  {
    avatar: AVTR2,
    name: "Shatte Wale",
    review:"Lorem ipsum,dolor sit amet consectetur adipisicing elit.Rerum recusandae, natus ea ipsam facere quaerat cum doloribus. Molestias a, hic, velit quas beatae sequi quidem architecto, in perspiciatis ut dolore!",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:"Lorem ipsum,dolor sit amet consectetur adipisicing elit.Rerum recusandae, natus ea ipsam facere quaerat cum doloribus. Molestias a, hic, velit quas beatae sequi quidem architecto, in perspiciatis ut dolore!",
  },
  {
    avatar: AVTR4,
    name: "Zara Husayn",
    review:"Lorem ipsum,dolor sit amet consectetur adipisicing elit.Rerum recusandae, natus ea ipsam facere quaerat cum doloribus. Molestias a, hic, velit quas beatae sequi quidem architecto, in perspiciatis ut dolore!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
