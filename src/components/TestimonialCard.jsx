
export const TestimonialCard = ({testimonial,image,rate,author,location}) => {
  return (
    <div className="text-center flex flex-col items-center gap-5 text-gray-800">
    <img className="w-[6rem] h-[6rem] rounded-full border" src={image} alt="" />
    <p>{testimonial}</p>
    <div className="flex justify-center gap-2">
    {
        Array(5).fill(0).map((_,i) => (
            i < rate ? <img key={i} width={30} src="/icons/star-filled.svg" alt="star-icon-filled"/> : <img key={i} width={30} src="/icons/star-empty.svg" alt="star icon empy"/>
            ))
        }
    </div>
    <strong>{`${author}, ${location}`}</strong>
</div>
  )
}
