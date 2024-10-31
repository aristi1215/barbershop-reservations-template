import { createContext, useContext, useState } from "react";
import { supabase } from "../../supabase/client";
import { useAuthContext } from "./AuthContextProvider";


const ReservationsContext = createContext()

export const useReservationsContext = () => { 
    
    const reservationsContext = useContext(ReservationsContext)
    if(!reservationsContext) throw new Error('The context must be called inside a provider')
    return reservationsContext
}

export const ReservationsProvider = ({children}) => {

    const { user } = useAuthContext()
    const [error, setError] = useState('')

    const fetchReservations = async () =>{
        const {data, error} = await supabase.from('reservation').select('date')
        if(error) throw new Error('Error fetching the reservations')
        const formattedArray = data?.map(data => data.date)
        return formattedArray
      }

    const createReservation = async (date) => {

        if(!date){
            setError('A date must be selected')
            return
        }

        const { error } = await supabase
        .from('reservation')
        .insert({ user_id: user.id, 
                date,
                payed: false,
                location_id: 1,
                employee_id: 1
                })

        if(error) {
        setError('An error has occurred creating the reservation')
        throw new Error('An error has occurred while creating the reservation')
      }
    }   


  return (
    <ReservationsContext.Provider value={{ fetchReservations, createReservation, error, setError }}>
        {children}
    </ReservationsContext.Provider>
  )
}
