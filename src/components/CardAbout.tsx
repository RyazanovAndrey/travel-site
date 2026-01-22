import { fadeIn } from "../motion/animation"
import type { TAboutProps } from "../types/type"
import { motion } from "motion/react"

const CardAbout = ({ img, title, desc } : TAboutProps) => {
  return (
    <motion.div variants={fadeIn} className="grid grid-cols-[80px_1fr]">
      <div className="shadow-2xl size-18 rounded-full flex items-center justify-center">
        <img src={img} alt="" />
      </div>
      <div>
        <p className="text-2xl font-semibold">{title}</p>
        <p>{desc}</p>
      </div>
    </motion.div>
  )
}

export default CardAbout