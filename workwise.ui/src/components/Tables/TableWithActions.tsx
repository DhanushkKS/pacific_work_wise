import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import UpdateDepartment from "../../features/Departments/update";
import DeleteDepartment from "../../features/Departments/delete/DeleteDepartment.tsx";
import { ActionButton } from "./ActionButtons.tsx";
import UpdateEmployee from "../../features/Employee/update";
import DeleteEmployee from "../../features/Employee/delete/DeleteEmployee.tsx";

type TablewithActionsProps = {
  rows: any;
  columns: any;
  entityType?: "dep" | "emp";
};

const TableWithActions = ({
  rows,
  columns,
  entityType,
}: TablewithActionsProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell key="actions" align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row?.id}>
                  {columns?.map((column) => {
                    const value = row[column?.id];
                    return (
                      <TableCell key={column?.id} align={column?.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                  <TableCell
                    align="center"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      columnGap: 2,
                    }}
                  >
                    <>
                      <ActionButton
                        component={
                          entityType === "dep" ? (
                            <UpdateDepartment id={row.id} />
                          ) : entityType === "emp" ? (
                            <UpdateEmployee id={row.id} />
                          ) : null
                        }
                      />
                    </>

                    <>
                      <ActionButton
                        component={
                          entityType === "dep" ? (
                            <DeleteDepartment id={row.id} />
                          ) : entityType === "emp" ? (
                            <DeleteEmployee id={row.id} />
                          ) : null
                        }
                      />
                    </>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.length ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableWithActions;
