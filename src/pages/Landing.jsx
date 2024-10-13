import { Hero } from "../components/landing/Hero"
import { Services } from "../components/landing/Services"
import { Statistics } from "../components/landing/Statistics"
import { Discount } from "../components/landing/Discount"
import { Reviews } from "../components/landing/Reviews"
import { Footer } from "../components/Footer"

export const Landing = () => {
  return (
    <div className="overflow-x-hidden font-inter-p">
        <Hero />
        <Services />
        <Statistics />
        <Discount />
        <Reviews />
        <Footer />
    </div>
  )
}
