import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useGlobalContext } from "../../context";
import { Button } from "@mui/material";

const DeleteAlert = () => {
  const [open, setOpen] = React.useState(false);
  const { deleteDilog, setDeleteDilog, selectedIds, loading, deleteNote } =
    useGlobalContext();

  const handleClickOpen = () => {
    setDeleteDilog(true);
  };

  const handleClose = () => {
    setDeleteDilog(false);
  };

  return (
    <div>
      <Dialog
        open={deleteDilog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          className="text-white bg-[#1E1E1E]"
          id="responsive-dialog-title"
        >
          {loading
            ? "...Deleting .. Please Wait"
            : `Are you sure you want to delete the ${selectedIds.length} note(s)?`}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions className="bg-[#1E1E1E]">
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={deleteNote} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteAlert;
