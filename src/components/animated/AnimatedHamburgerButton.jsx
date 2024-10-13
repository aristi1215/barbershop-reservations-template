import { motion, MotionConfig } from "framer-motion"

export const AnimatedHamburgerButton = ({active, setActive}) => {
  return (
    <MotionConfig 
    transition={{
        duration: 0.3,
        transition: 'easeInOut'
    }}>
        <motion.button className="relative h-16 w-16 rounded-full bg-black/0 transition-colors hover:bg-black/40"
        initial={false} onClick={() => setActive(!active)} animate={active ? 'open' : 'closed'}>

            <motion.span className="absolute h-1 w-10 bg-p-yellow" style={{
                left: '50%',
                top: '35%',
                x: '-50%',
                y: '-50%'
            }}
            variants={{
                open: {
                    rotate: ["0deg", "0deg","45deg"],
                    top: ["35%", "50%", "50%"]
                },
                closed: {
                    rotate: ["45deg", "0deg","0deg"],
                    top: ["50%", "50%", "35%"]
                }
            }}
            ></motion.span>

            <motion.span className="absolute h-1 w-10 bg-p-yellow" style={{
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%',
            }}
            variants={{
                open: {
                    rotate: ["0deg", "0deg","-45deg"],
                },
                closed: {
                    rotate: ["-45deg", "0deg","0deg"]
                }
            }}
            ></motion.span>

            <motion.span className={`absolute h-1 w-10 bg-p-yellow ${active ? 'hidden' : 'block'}`} style={{
                left: 'calc(50%)',
                bottom: '35%',
                x: '-50%',
                y: '50%'
            }}
            ></motion.span>

        </motion.button>
    </MotionConfig>
  )
}
