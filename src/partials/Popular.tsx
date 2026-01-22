import CardPopular from "../components/CardPopular"
import { popularList } from "../data/data"
import { containerStagger, fadeIn } from "../motion/animation"
import { motion } from "motion/react"

const Popular = () => {
  return (
    <motion.section className="py-20 md:py-30" id="package"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
      variants={containerStagger}
    >
      <div className="container">
        <div className="text-center mb-20">
          <motion.div variants={fadeIn} className="font-desc text-desc text-3xl font-bold">Popular packages</motion.div>
          <motion.h2 variants={fadeIn} className='text-[clamp(30px,2.5vw,48px)] font-semibold'>Find popular tours</motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-10">
          {popularList.map(item => (
            <CardPopular {...item} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Popular