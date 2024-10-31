import { useAuthContext } from "../context/AuthContextProvider"
import { useAuthForm } from "../hooks/useAuthForm"

export const AuthModal = ({setIsOpen}) => {

    const {
        email, setEmail,
        password, setPassword,
        handleSignOut,
        handleSignUp
      } = useAuthForm(setIsOpen)


    const {session} = useAuthContext()

    const renderFormContent = () => {
        if(session){
            return (   <div className="flex gap-2">
                <button
                onClick={handleSignOut}
                className="bg-black/80 text-p-yellow hover:bg-white/10 transition-colors  font-semibold w-full py-2 rounded mt-10"
                >
                Log out
                </button>
            </div> )
        }else{
            return (
                <>
                <form className="text-center mb-6 flex flex-col gap-10 ">
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className="rounded-xl h-8 text-black px-1" type="email" name="email" id="email" />  
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} className="rounded-xl h-8 text-black px-1" type="password" name="password" id="password" />
                    </div>
                </form>
                <div className="flex gap-2">
                    <button
                    onClick={handleSignUp}
                    className="bg-black/80 hover:bg-black/30 transition-colors text-p-yellow font-semibold w-full py-2 rounded">
                    Sign in
                    </button>
                </div> 
                </>
            )
        }
    }
 
  return (
    <>
        <h3 className="text-3xl font-bold text-center mb-2">
            {session ? 'Sign Out' : 'Register'}
        </h3>
        {renderFormContent()}
    </>
  )
}
