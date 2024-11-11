import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

type FormModalProps = {
  children: React.ReactNode;
  buttonTitle?: string;
  onClose?: () => void;
  open?: boolean;
};
const FormModal = ({ children, buttonTitle, onClose }: FormModalProps) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
    if (onClose) onClose();
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonTitle}
      </Button>
      <Dialog open={openModal} onClose={handleClose}>
        {children}
      </Dialog>
    </React.Fragment>
  );
};
export default FormModal;
