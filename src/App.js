import "./App.css";
import NavBar from "./components/NavBar";

import HeaderNav from "./components/HeaderNav";
import NotesBody from "./components/NotesBody";

import Footer from "./components/Footer";
import loader2 from "./components/WriteNotes/Infinity-1s-200px.svg";
import { motion, AnimatePresence } from "framer-motion";
import WriteNotes from "./components/WriteNotes";
import { useGlobalContext } from "./context";
import DeleteAlert from "./components/Alerts/DeleteAlert";
function App() {
  const { loading, isEditing, newNote } = useGlobalContext();
  const cont = {
    hidden: { x: 0, opacity: 1, scale: 0 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    transition: { type: "Tween", stiffness: 100 },
  };
  return (
    <div className="sm:max-w-screen-lg relative mx-auto sm:flex shadow-2xl w-full h-[100vh]">
      <AnimatePresence>
        {newNote && (
          <motion.div
            key="writeNote"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: "100%",
              opacity: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute z-50 w-full md:basis-6/12 md:hidden block bg-[#171717]"
          >
            <WriteNotes />

            {/* <div className="h-fulltext-white"></div> */}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEditing && (
          <motion.div
            key="writeNote"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: "100%",
              opacity: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute z-50 w-full md:basis-6/12 md:hidden block bg-[#171717]"
          >
            <WriteNotes />

            {/* <div className="h-fulltext-white"></div> */}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className=" basis-6/12 bg-[#171717] md:block hidden">
        <WriteNotes />

        {/* <div className="h-fulltext-white"></div> */}
      </motion.div>

      <div className="md:basis-6/12 w-full">
        <div className="sticky top-0 bg-[#171717] text-white">
          <NavBar />
          <HeaderNav />
        </div>
        <div className="h-[calc(100vh-74px)] bg-[#171717] text-white relative overflow-y-auto">
          <DeleteAlert />
          {loading && (
            <img
              className="absolute left-[43%] top-[-15px] w-[70px]"
              src={loader2}
            />
          )}

          <NotesBody />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
