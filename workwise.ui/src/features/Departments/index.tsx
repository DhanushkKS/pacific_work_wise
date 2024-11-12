import RootLayout from "../../layouts/RootLayout.tsx";
import TableWithActions from "../../components/Tables/TableWithActions.tsx";
import useDepartments from "./hooks/useDepartments.ts";
import CreateDepartment from "./create";
import { Grid, Typography } from "@mui/material";

const Departments = () => {
  const { columns, rows } = useDepartments();
  return (
    <RootLayout>
      <Grid container display="flex" mt={2} columnGap={10} rowGap={4} p={2}>
        <Typography variant="h5">All Departments</Typography>
        <CreateDepartment />
        <TableWithActions rows={rows} columns={columns} entityType="dep" />
      </Grid>
    </RootLayout>
  );
};
export default Departments;
