import { CircleArrowRight, Star } from 'lucide-react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { destList } from '../data/data';
import { motion } from "motion/react"
import { containerStagger, fadeIn } from '../motion/animation';

const Destination = () => {
  return (
    <motion.section className="py-20 md:py-30" id='destination'
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
      variants={containerStagger}
    >
      <div className="container">
        <div className="mb-10">
          <motion.div variants={fadeIn} className="font-desc text-desc text-3xl font-bold">Destination</motion.div>
          <motion.h2 variants={fadeIn} className='text-[clamp(30px,2.5vw,48px)] font-semibold'>Popular destination</motion.h2>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn'
            }}
            breakpoints={{
              768: {
                slidesPerView: 2.5
              },
              992: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 4
              }
            }}
            className='destination-slider'            
          >
            {destList.map(item => (
              <SwiperSlide>
                <motion.div variants={fadeIn} className="relative overflow-hidden group cursor-pointer rounded-2xl ">
                  <img src={item.img} alt="" className='w-full group-hover:scale-110 duration-500' />
                  <span className='absolute top-2 right-2 z-50 bg-white py-2 px-4 rounded-2xl flex items-center gap-x-2'><Star size={16} color='orange' />{item.stars}</span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <CircleArrowRight size={64} strokeWidth={1} className='absolute -top-25 right-0 z-50 next-btn borde next-btn cursor-pointer hover:text-desc duration-300' />
        </div>
      </div>
    </motion.section>
  )
}

export default Destination