import { useSpring, motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"


export const AnimatedNumbers = ({finalCount}) => {
    const [finalNumber, setFinalNumber] = useState(0)
    const spanRef = useRef(null)
    const isInView = useInView(spanRef, {
        amount: '70%',
        once: true
    })
    const springSubcount = useSpring(0, {
        bounce: 0,
        duration: 2000
    })

    springSubcount.on('change', (value) => {
        setFinalNumber(Math.round(value))
    })

    useEffect(() => {
        if(isInView){
            springSubcount.set(finalCount)
        }
    },[isInView])

  return (
    <motion.span className="text-p-yellow text-[4rem] tracking-widest font-headings"
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{duration: 3}}
    ref={spanRef}
    >
        {finalNumber}
    </motion.span>
  )
}
