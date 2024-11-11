import FormModal from "../../../components/Forms/FormModal.tsx";
import { Grid } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDeleteEmployeeMutation } from "../../../redux/employee/api.ts";

type DeleteEmployeeProps = { id: string };
const DeleteEmployee = ({ id }: DeleteEmployeeProps) => {
  const [open, setOpen] = useState(false);
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteEmployee = async () => {
    await deleteEmployee(id);
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
        >
          <DialogTitle variant="h5" mt={2}>
            Are you sure to delete this employee?
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
          >
            <Button
              onClick={handleClose}
              type="submit"
              variant="outlined"
              color="primary"
            >
              No
            </Button>
            <Button
              type="submit"
              variant="outlined"
              color="error"
              onClick={handleDeleteEmployee}
            >
              Yes
            </Button>
          </Grid>
        </Grid>
      </FormModal>
    </>
  );
};
export default DeleteEmployee;
