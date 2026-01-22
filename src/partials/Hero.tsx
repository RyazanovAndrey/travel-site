import { motion } from "motion/react"
import { containerStagger, fadeIn } from "../motion/animation"
import Btn from "../components/Btn"
import { tourList } from "../data/data"

const Hero = () => {
  return (
    <motion.section className="hero flex items-center text-white"
    initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: false }}
          variants={containerStagger}
    >
      <div className="container">
        <div>
          <div className="container space-y-6 md:space-y-10">
            <motion.div variants={fadeIn} className="font-desc text-3xl">Beauty of descovers</motion.div>
            <motion.h1 variants={fadeIn} className='font-bold text-[clamp(40px,3.12vw,60px)]'>Lets travel the <br /> world with us </motion.h1>
            <motion.p variants={fadeIn} className=''>Planning for a trip? We will organize your <br /> trip with the best places and within best budget!</motion.p>
            <motion.div variants={fadeIn} className="space-x-2">
              <Btn variant='fill'>See more</Btn>
              <Btn variant='border'>See more</Btn>
            </motion.div>
            <div className="flex gap-5 flex-wrap justify-center md:justify-start md:gap-10">
              {tourList.map(item => (
                <motion.div variants={fadeIn} className="flex flex-wrap flex-col items-center">
                  <img src={item.img} width={80} alt="" className='rounded-full' />
                  <div className="mt-5">{item.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero