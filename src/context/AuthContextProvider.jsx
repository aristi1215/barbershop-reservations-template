import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../../supabase/client"



export const AuthContext = createContext()

export const useAuthContext = () => {
    
    const context = useContext(AuthContext)
    if(!context) throw new Error('The context must be inside a context provider')
    return context
}


export const AuthContextProvider = ({children}) => {

  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    
    const setUserAuth = async () => {
      setLoading(true)
      const {data, error} = await supabase.auth.getSession()
      setLoading(false)
      if(error) throw new Error('Error retrieving session')
      if(data.session){
        setSession(data.session)
        setUser(data.session.user)
        setLoading(false)
      }else{
        setSession(null)
        setUser(null)
        setLoading(false)
      }
  } 

  supabase.auth.onAuthStateChange((event,session) => {
    setSession(session)
    setUser(session?.user)
    setLoading(false)

    if(event === 'SIGNED_IN' && (user?.user_metadata?.role == 'superAdmin' || user?.user_metadata?.role == 'admin')){
      console.log('user')
    }

  })

    setUserAuth()

  },[])


  const signUp = async(email, password, role='user') => {
    setLoading(true)
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        data:{
          role
        }
      }
    })
    setLoading(false)
    if(error) throw new Error(error)
    return data
  }

  const signIn = async (email,password) => {
    setLoading(true)
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setLoading(false)
    if(error) throw new Error(error)
      return data
  }

  const signOut = async() => {
    await supabase.auth.signOut()
  }



  return (
    <AuthContext.Provider value={{user, session, loading , signUp , signIn, signOut}}>
        {children}
    </AuthContext.Provider>
  )
}
