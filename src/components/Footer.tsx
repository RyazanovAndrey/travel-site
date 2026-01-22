import { ChevronRight, Mail, MapPinCheckInside, Phone } from "lucide-react"
import { footerLinks } from "../data/data"
import { motion } from "motion/react"
import { containerStagger, fadeIn } from "../motion/animation"

const Footer = () => {

  const contactInfo = [
    { icon: <Phone size={18} />, title: '06163565321' },
    { icon: <Mail size={18} />, title: 'Branded marchandise' },
    { icon: <MapPinCheckInside size={18} />, title: '932 Galvin, st. Pampano Beach' },
  ]

  const currentDate = new Date()

  return (
    <motion.footer className="bg-main text-white py-20" id="contact"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
      variants={containerStagger}
    >
      <div className="container">
        <motion.div variants={fadeIn} className="text-2xl mb-10">Quick links</motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <motion.div variants={fadeIn}>
            {footerLinks.slice(0, 3).map(item => (
              <a href={item.href} className="flex text-white/50 hover:ml-2 transition-all"><ChevronRight />{item.title}</a>
            ))}
          </motion.div>
          <motion.div  variants={fadeIn}>
            {footerLinks.slice(3, 6).map(item => (
              <a href={item.href} className="flex text-white/50 hover:ml-2 transition-all"><ChevronRight />{item.title}</a>
            ))}
          </motion.div>
          <motion.div  variants={fadeIn}>
            {footerLinks.slice(6, 9).map(item => (
              <a href={item.href} className="flex text-white/50 hover:ml-2 transition-all"><ChevronRight />{item.title}</a>
            ))}
          </motion.div>
          <motion.div  variants={fadeIn}>
            {contactInfo.map(item => (
              <div className="flex items-center gap-3 space-y-3">
                <div className="mt-2">{item.icon}</div>
                <span>{item.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.span variants={fadeIn} className="border-t-2 border-white/10 w-full inline-block pt-3 mt-3">&copy; {currentDate.getFullYear()}</motion.span>
      </div>
    </motion.footer>
  )
}

export default Footer