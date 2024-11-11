import FormModal from "../../../components/Forms/FormModal.tsx";
import { Grid } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";

const DeleteDepartment = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FormModal buttonTitle="Delete" onClose={handleClose}>
        <Grid
          container
          gap={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          // sx={{ border: "solid 1px" }}
        >
          <DialogTitle variant="h5" mt={2}>
            Are you sure to delete department?
          </DialogTitle>
          <Grid
            container
            spacing={0}
            columnGap={3}
            width="100%"
            mr={2}
            mb={4}
            display="flex"
            justifyContent="center"
            // sx={{ border: "solid 1px" }}
          >
            <Button
              onClick={handleClose}
              type="submit"
              variant="outlined"
              color="primary"
            >
              No
            </Button>
            <Button type="submit" variant="outlined" color="error">
              Yes
            </Button>
          </Grid>
        </Grid>
      </FormModal>
    </>
  );
};
export default DeleteDepartment;
