
import { AnimatedCarousel } from "../animated/AnimatedCarousel"
import testimonials from '../../mocks/mockTestimonials.json'
import { TestimonialCard } from "../TestimonialCard";

export const Reviews = () => {
const isMobile = window.innerWidth < 768;

  return (
    <>
    <section className="py-5">
        <header className="text-center md:mb-16">
            <h3 className="uppercase text-p-yellow">What people say about us</h3>
            <h2 className="uppercase text-[2rem]">Clients reviews</h2>
        </header>
        <main className="justify-center items-center px-5 gap-10 hidden md:flex">
            {
                testimonials.map((testimonial, i) => (
                    <TestimonialCard 
                    key={i} testimonial={testimonial.testimonial} image={testimonial.image} author={testimonial.author} location={testimonial.location} rate={testimonial.rate}/>
                )
                )
            }
        </main>
           {/* Condition made to avoid unnecessary render of the component on desktop */}
        {isMobile && <AnimatedCarousel />}
    </section>
 
    </>

  )
}
