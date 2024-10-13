
export const Discount = () => {
  return (
    <section className="bg-p-yellow relative flex justify-center overflow-hidden py-10">
        <div className="w-full lg:w-[40%] flex flex-col text-center items-center lg:text-start lg:items-start gap-10 lg:ml-20">
            <h2 className="text-[3rem] uppercase ">25% discount</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In optio animi quae. Fuga minima velit maxime tempora cupiditate architecto, tempore deleniti pariatur asperiores cum officiis facilis error, odit fugit voluptatum!</p>
            <button className="bg-black text-p-yellow p-2 w-[10rem]">BOOK NOW</button>
        </div>
        <img className="hidden lg:block scale-[1.7] " src="/imgs/barber-shaving3.png" alt="" />
    </section>
  )
}
