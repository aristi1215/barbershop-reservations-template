import dayjs from "dayjs";
import { useCalendar } from "../hooks/useCalendar";
import {days} from '../hooks/useCalendar'
import {months} from '../hooks/useCalendar'
import { useEffect, useState } from "react";
import { useReservationsContext } from "../context/ReservationsContext";

export const Calendar = () => {

  const {
    currentMonth,
    currentYear,
    handleNextMonth, handlePastMonth,
    daysMonth
  } = useCalendar()

  const [selectedDay, setSelectedDay] = useState(null);
  const { fetchReservations, createReservation, error, setError } = useReservationsContext()
  const [reservatedDays, setReservatedDays] = useState([])

  useEffect(() => {
    setError('')
    fetchReservations().then(data => setReservatedDays(data))
  },[])

  const handleSelectedDay = (day) => {
    if(!reservatedDays.includes(day.format("YYYY-MM-DD"))){
      setSelectedDay(day.format("YYYY-MM-DD"));
    }
  };


  return (
    <div className="flex justify-center items-center">

      <div className="w-[20rem] p-3">

        <div className="flex justify-between w-full px-1 mb-3">
          <h4>{months[currentMonth]} &nbsp; {dayjs().month(currentMonth).year(currentYear).$y} </h4>
          <div className="flex gap-5">
            <button onClick={handlePastMonth} > &lt; </button>
            <button onClick={handleNextMonth} >&gt;</button>
          </div>
        </div>

      <div className="grid grid-cols-7 grid-rows-6 gap-1 w-full text-center">
            {days.map(day => <span className="mb-2" key={day}>{day}</span>)}

            {daysMonth.map((day,i) => {
              if (!day) return <p key={i}></p>;
              return (
                <p
                  className={`${selectedDay === day.format("YYYY-MM-DD") && !reservatedDays.includes(day.format("YYYY-MM-DD")) ? "bg-white rounded-full text-yellow-700 flex items-center justify-center font-headings" : "" } ${reservatedDays.includes(day.format("YYYY-MM-DD")) ? 'bg-black/50 text-white rounded-full flex items-center justify-center' : ''} cursor-pointer`}
                  onClick={() => handleSelectedDay(day)}
                  key={i}
                >
                  {day.$D}
                </p>)
              })}
      </div>

      <div className="w-full flex justify-around items-center mt-4  ">
        <button onClick={ () => createReservation(selectedDay) } className="w-[70%] p-1 bg-black/70 rounded-lg text-p-yellow font-headings">Reserve</button>
      </div>
      <p className="text-center mt-3">{error}</p>

      </div>

    </div>
  )
}
