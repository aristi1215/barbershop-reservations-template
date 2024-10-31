import dayjs from "dayjs";
import { useState, useEffect } from "react";

export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const useCalendar = () => {

  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const [currentYear, setCurrentYear] = useState(dayjs().year());
  const [daysMonth, setDaysMonth] = useState([]);

  // Function used to create the days of the month
  /**
   * 
   * @param {dayjs object} month Example: dayjs().month()
   * @param {dayjs object} year Example: dayjs().month().year()
   * @returns {Array <Object>} Example: Day{$m, $d, $D}
   */
  const createDaysOfMonth = (month = currentMonth, year = currentYear) => {
    const daysArray = [];
    const lastDay = dayjs().month(month).year(year).daysInMonth();

    for (let i = 1; i <= lastDay; i++) {
      daysArray.push(dayjs().year(year).month(month).date(i));
    }


    const firstDayOfMonth = dayjs().month(month).year(year).startOf("month");
    for (let i = 0; i < firstDayOfMonth.day(); i++) {
      daysArray.unshift(null);
    }

    const remaining = 35 - daysArray.length;
    for (let i = 0; i < remaining; i++) {
      daysArray.push(null);
    }

    setDaysMonth(daysArray);
  };

  // Recalcular los días cada vez que cambie el mes o el año
  useEffect(() => {
    createDaysOfMonth(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  const handleNextMonth = () => {
    if (currentMonth === months.length - 1) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePastMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return {
    currentMonth,
    currentYear,
    handleNextMonth,
    handlePastMonth,
    daysMonth,
  };
};
