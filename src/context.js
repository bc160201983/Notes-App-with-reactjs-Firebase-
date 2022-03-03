import React, { useState, useContext, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
// make sure to use https

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState({});
  const notesRef = collection(db, "notes");
  const [wordCount, setWordCount] = useState(0);

  const CalculateWords = () => {
    let slitedData = body.length;
    setWordCount(slitedData);
  };

  useEffect(() => {
    CalculateWords();
  }, [body]);
  const getNotes = async () => {
    try {
      const data = await getDocs(notesRef);
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error);
    }
  };
  const getSingleNote = async (id) => {
    const singleNote = notes.filter((n) => n.id === id);
    setTitle(singleNote[0].title);
    setBody(singleNote[0].body);
  };
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <AppContext.Provider
      value={{
        wordCount,
        setWordCount,
        body,
        setBody,
        title,
        setTitle,
        notes,
        getSingleNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
