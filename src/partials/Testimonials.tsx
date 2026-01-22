import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; import Btn from "../components/Btn"
import { testiList } from '../data/data';
import { Star } from 'lucide-react';
import { motion } from "motion/react"
import { containerStagger, fadeIn, fadeInOpacity } from '../motion/animation';

const Testimonials = () => {
  return (
    <motion.section className="py-20 md:py-30" id='testimonials'
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
      variants={containerStagger}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-10">
            <motion.div variants={fadeIn} className="font-desc text-desc text-3xl font-bold">Testimonials</motion.div>
            <motion.h2 variants={fadeIn} className='text-[clamp(30px,2.5vw,48px)] font-semibold'>What traveler says</motion.h2>
            <motion.p variants={fadeIn}>We dont`t work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people</motion.p>
            <motion.button variants={fadeIn}>
              <Btn variant="fill">Find out more</Btn>
            </motion.button>
          </div>
          <div className="">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={40}
              loop
            >
              {testiList.map(item => (
                <SwiperSlide>
                  <motion.div variants={fadeInOpacity} className="relative bg-desc rounded-2xl text-white pt-15 px-10 pb-10 mt-5 ml-5">
                    <p className='mb-3'>{item.desc}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-y-1">
                        <span className='card-testi-1'>{item.title}</span>
                        <span className='card-testi-2'>{item.org}</span>
                      </div>
                      <div className="flex">
                        {item.stars.map(_ => {
                          return <Star color='orange' />
                        })}
                      </div>
                    </div>
                    <img src={item.img} alt="" className='w-20 rounded-full absolute -top-5 -left-5' />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper></div>
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonials