import Btn from "../components/Btn"
import CardAbout from "../components/CardAbout"
import { aboutList } from "../data/data"
import { motion } from "motion/react"
import { containerStagger, fadeIn, fadeInOpacity } from "../motion/animation"

const About = () => {
  return (
    <motion.section className="py-20 md:py-30" id="about"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
      variants={containerStagger}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-8">
            <motion.div variants={fadeIn} className="font-desc text-desc text-3xl font-bold">About us</motion.div>
            <motion.h2 variants={fadeIn} className='text-[clamp(30px,2.5vw,48px)] font-semibold'>We create journeys for the excited us</motion.h2>
            <motion.p variants={fadeIn}>Planning for a trip? We will organize your trip with the best places and within budget!</motion.p>
            <motion.button variants={fadeIn}>
              <Btn variant="fill">Learn more</Btn>
            </motion.button>
          </div>
          <div className="">
            <motion.img variants={fadeInOpacity} src="about.png" alt="" />
          </div>
          <div className="space-y-10">

            {aboutList.map(item => (
              <CardAbout {...item} />
            ))}

          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About