import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContextProvider"

export const useAuthForm = (setIsOpen) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signOut, signIn} = useAuthContext()
    const navigate = useNavigate()

    const handleSignUp = async () => {
      const sessionData = await signIn(email, password, 'superAdmin')

      if(sessionData.user.user_metadata.role === 'superAdmin' || sessionData.user.user_metadata.role === 'admin'){
        navigate('/admin/home')
      }
      setIsOpen(false)
    }

    const handleSignOut = () => {
      setIsOpen(false)
      signOut()
    }

  return {
    email, setEmail,
    password, setPassword,
    handleSignOut,
    handleSignUp
  }
}
