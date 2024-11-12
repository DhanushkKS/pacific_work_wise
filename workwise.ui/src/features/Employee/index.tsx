import RootLayout from "../../layouts/RootLayout.tsx";
import TableWithActions from "../../components/Tables/TableWithActions.tsx";
import CreateEmployee from "./create";
import { Grid, Typography } from "@mui/material";
import useEmployees from "./hooks/useEmployees.ts";

const Employees = () => {
  const { columns, rows } = useEmployees();
  return (
    <RootLayout>
      <Grid container display="flex" mt={2} columnGap={10} rowGap={4} p={2}>
        <Typography variant="h5">All Employees</Typography>
        <CreateEmployee />
        <TableWithActions rows={rows} columns={columns} entityType="emp" />
      </Grid>
    </RootLayout>
  );
};
export default Employees;
