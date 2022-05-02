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
  WriteBatch,
  deleteDoc,
} from "firebase/firestore";
import id from "date-fns/esm/locale/id/index.js";
import { set } from "date-fns";
// make sure to use https
import { ToastContainer, toast } from "react-toastify";
import { tr } from "date-fns/locale";

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
  const [newNote, setNewNote] = useState(false);
  const [deleteDilog, setDeleteDilog] = useState(false);
  const [error, setError] = useState(false);

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
      toast.error("fill the required feilds!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const note = doc(db, "notes", editId);

      try {
        await updateDoc(note, {
          title: title,
          body: body,
          UpdatedAt: serverTimestamp(),
        });
        setLoading(false);

        toast.success("Note Updated", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const createNote = async () => {
    if (title === "" || body === "") {
      toast.error("fill the required feilds!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setLoading(true);
      try {
        const docRef = await addDoc(notesRef, {
          title,
          body,
          CreatedAt: Timestamp.fromDate(new Date()),
          UpdatedAt: Timestamp.fromDate(new Date()),
        });

        setLoading(false);
        setNewNote(false);
        setTitle("");
        setBody("");
        toast.success("New Note Added", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
    if (id) {
      setSelectedIds([...selectedIds, id]);
    }
    selectedIds.map((item) => {
      if (item === id) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    });
  };

  // const checkDuplicates = (ids) => {
  //   const uniqueIds = [...new Set(ids)];
  //   return uniqueIds;
  // };
  const handleDelete = () => {
    setDeleteDilog(true);
    // const ids = selectedIds;
    // ids.forEach(async (id) => {
    //   const delRef = doc(db, "notes", id);
    //   try {
    //     const ref = await deleteDoc(delRef);
    //     console.log("Items Has Been Deleted", ref);
    //     setSelectedIds(0);
    //     setVisible(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // delRef
    //   .delete()
    //   .then(() => {
    //     console.log("deleted a laptop");
    //   })
    //   .catch((err) => console.log("There is some error in updating!"));
    //});
  };
  const deleteNote = () => {
    const ids = selectedIds;
    toast.success(`${selectedIds.length} Note Deleted`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    ids.forEach(async (id) => {
      const delRef = doc(db, "notes", id);
      try {
        await deleteDoc(delRef);

        setLoading(false);
        setSelectedIds(0);
        setVisible(false);

        setDeleteDilog(false);
      } catch (error) {
        console.log(error);
      }
    });
  };
  return (
    <AppContext.Provider
      value={{
        deleteNote,
        deleteDilog,
        setDeleteDilog,
        newNote,
        setNewNote,
        handleDelete,
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
        setError,
        error,
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
