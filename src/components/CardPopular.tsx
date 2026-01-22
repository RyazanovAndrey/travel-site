import { MapPin, Star, Timer } from "lucide-react"
import type { TPopularProps } from "../types/type"
import { motion } from "motion/react"
import { fadeIn } from "../motion/animation"

const CardPopular = ({ img, days, location, stars, price, title  }: TPopularProps) => {
  return (
    <motion.div variants={fadeIn} className="relative rounded-2xl overflow-hidden shadow-2xl/10">
      <img src={img} alt="" className="w-full" />
      <div className="py-10 px-5 space-y-2">
        <div>
          <div className="text-desc font-semibold text-lg">${price}</div>
          <div className="text-xl font-semibold">{title}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <MapPin color="#ff5241" />
            <span className="text-gray-400">{location}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Timer color="#ff5241" />
            <span className="text-gray-400">{days}</span>
          </div>
        </div>
      </div>
      <span className='absolute top-2 right-2 z-50 bg-white py-2 px-4 rounded-2xl flex items-center gap-x-2'><Star size={16} color='orange' />{stars}</span>
    </motion.div>
  )
}

export default CardPopular