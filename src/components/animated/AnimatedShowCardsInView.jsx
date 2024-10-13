import { motion } from "framer-motion"

export const AnimatedShowCardsInView = ({initial, title, image, text}) => {
  return (
    <motion.div className="border border-p-yellow h-[18rem] flex flex-col items-center justify-center gap-3 mb-4 "
    initial={{
      transform: `translate(${initial})`,
      opacity: 0
    }}
    whileInView={{
      transform: 'translate(0%)',
      opacity: 1,
    }}
    transition={{
      duration: 2,
    }}
    viewport={{
      amount: '70%',
      once: true
    }}
    >
      <img src={image} alt="" />
      <h4 className="text-3xl">{title}</h4>
      <p className="w-[80%] text-sm">{text}</p>
  </motion.div>
  )
}



