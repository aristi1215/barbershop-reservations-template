import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

const Modal = ({btnText, Content, showHeader, Button}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonRender = () => {
    if(Button){
      return <Button setIsOpen={setIsOpen} isOpen={isOpen} />
    }else{
      return (
        <button
        onClick={() => setIsOpen(true)}
        className="border-2 border-p-yellow p-2 hover:opacity-90 transition-opacity"
      >
        {btnText}
      </button>
      )
    }
  }
  return (
    <div className="">
      {handleButtonRender()}
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} Content={Content} showHeader={showHeader} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen, Content, showHeader }) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-black to-yellow-600 text-dark p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className={`bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto ${showHeader ? '' : 'hidden'}`}>
                <FiAlertCircle className="text-p-yellow" />
              </div>
              {<Content setIsOpen={setIsOpen} />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal