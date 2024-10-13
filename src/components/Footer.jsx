
export const Footer = ({bg,text}) => {
  return (
    <footer className={`flex flex-col items-center text-center p-10 ${bg || 'bg-black'}  ${bg || 'text-white'} py-12`}>
        <h2 className="uppercase text-[3rem] font-headings">Contact us</h2>
        <p className="w-[70%] mb-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore expedita, vero perspiciatis eaque rerum minus, mollitia asperiores quidem quos sint non voluptatibus magnam illum voluptatem assumenda! Reiciendis ea nesciunt ipsum?</p>
        <div className="flex text-center justify-center gap-10 flex-col md:flex-row">


            <div className="flex flex-col items-center">
                <img src="/icons/clock.svg" alt="" />
                <h4 className="uppercase">address</h4>
                <p>304 North Cardinal St. <br />
                Dorchester Center, Ma 02124
                </p>
            </div>
            <div className="flex flex-col items-center">
                <img src="/icons/envelope.svg" alt="" />
                <h4 className="uppercase">email</h4>
                <p>info@company.com</p>
            </div>

 
            <div className="flex flex-col items-center">
                <img src="/icons/phone.svg" alt="" />
                <h4 className="uppercase">phone</h4>
                <p>(+1) 555 1212</p>
                <p>(+1) 555 1212</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="/icons/clock.svg" alt="" />
                <h4 className="uppercase">Working hours</h4>
                <p>Mon - Fri: 10am - 6pm</p>
                <p>Sat - Sun: 12am - 4pm</p>
            </div>
        </div>
        <hr className="w-full border-none h-[1px] bg-p-yellow my-10" />
        <p>&copy; Copyright Barbershop 2024<br /> Developed By Nova Web Development</p>
    </footer>
  )
}
