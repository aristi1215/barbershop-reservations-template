import { AnimatedNumbers } from "../animated/AnimatedNumbers"

export const Statistics = () => {
  return (
    <section className="bg-gray-bg flex flex-col justify-center items-center text-white text-center py-10 gap-10 md:flex-row md:justify-around">
        <div className="flex flex-col items-center">
            <img className="w-[6rem]" src="/icons/razor.svg" alt="" />
            <AnimatedNumbers finalCount={1050} />
            <small>SHAVES</small>
        </div>
        <div className="flex flex-col items-center">
            <img className="w-[5rem]" src="/icons/scissors.svg" alt="" />
            <AnimatedNumbers finalCount={2000} />
            <small>SHAVES</small>
        </div>
        <div className="flex flex-col items-center">
            <img src="/icons/stores.svg" alt="" className="w-[5rem]" />
            <AnimatedNumbers finalCount={30} />
            <small>SHAVES</small>
        </div>
    </section>
  )
}
