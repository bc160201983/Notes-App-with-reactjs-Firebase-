import React, { useState, useContext, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
  updateDoc,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
// make sure to use https

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [body, setBody] = useState("");
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState({});
  const notesRef = collection(db, "notes");
  const [wordCount, setWordCount] = useState(0);
  const [alert, setAlert] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const CalculateWords = () => {
    let slitedData = body.length;
    setWordCount(slitedData);
  };

  useEffect(() => {
    CalculateWords();
  }, [body]);
  // const getNotes = async () => {
  //   const q = query(notesRef, orderBy("CreatedAt", "desc"));
  //   try {
  //     const data = await getDocs(q);
  //     setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getSingleNote = async (id) => {
    setIsEditing(true);
    const singleNote = notes.filter((n) => n.id === id);
    setEditId(singleNote[0].id);
    setTitle(singleNote[0].title);
    setBody(singleNote[0].body);
  };
  const handleEdit = async () => {
    if (title === "" || body === "") {
      console.log("fill the required feilds");
    } else {
      const note = doc(db, "notes", editId);

      try {
        await updateDoc(note, {
          title: title,
          body: body,
          UpdatedAt: serverTimestamp(),
        });
        console.log("note updated");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const createNote = async () => {
    if (title === "" || body === "") {
      console.log("please fill add Todo before update");
    } else {
      try {
        const docRef = await addDoc(notesRef, {
          title,
          body,
          CreatedAt: Timestamp.fromDate(new Date()),
          UpdatedAt: Timestamp.fromDate(new Date()),
        });

        setTitle("");
        setBody("");
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const q = query(notesRef, orderBy("CreatedAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLoading(false);
      setNotes(newNotes);
    });
    return () => unsubscribe();
  }, []);

  const handleCheckBox = (id) => {
    setSelectedIds([...selectedIds, id]);
  };
  console.log(selectedIds);
  return (
    <AppContext.Provider
      value={{
        selectedIds,
        setSelectedIds,
        handleCheckBox,
        loading,
        editId,
        visible,
        setVisible,
        handleEdit,
        isEditing,
        setIsEditing,
        createNote,
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
