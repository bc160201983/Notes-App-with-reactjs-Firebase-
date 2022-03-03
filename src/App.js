import "./App.css";
import NavBar from "./components/NavBar";

import HeaderNav from "./components/HeaderNav";
import NotesBody from "./components/NotesBody";

import Footer from "./components/Footer";
import loader2 from "./components/WriteNotes/Infinity-1s-200px.svg";

import WriteNotes from "./components/WriteNotes";
import { useGlobalContext } from "./context";
function App() {
  return (
    <div className="sm:max-w-screen-lg mx-auto sm:flex shadow-2xl w-full h-[100vh]">
      <div className="left basis-6/12 bg-[#171717] sm:block hidden">
        <WriteNotes />

        {/* <div className="h-fulltext-white"></div> */}
      </div>
      <div className="basis-6/12">
        <div className="h-[100vh] bg-[#171717] text-white relative overflow-y-auto">
          <div className="sticky top-0 bg-[#171717]">
            <NavBar />
            <HeaderNav />
          </div>
          <div className="">
            <NotesBody />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
