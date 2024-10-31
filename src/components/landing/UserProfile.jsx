

export const UserProfile = ({isOpen, setIsOpen}) => {
  return (
    <img className="cursor-pointer" src="/icons/user.png" width={50} height={50} onClick={() => setIsOpen(!isOpen)} />
  )
}
