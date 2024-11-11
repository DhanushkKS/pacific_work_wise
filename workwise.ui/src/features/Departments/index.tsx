import RootLayout from "../../layouts/RootLayout.tsx";
import TableWithActions from "../../components/Tables/TableWithActions.tsx";
import useDepartments from "./hooks/useDepartments.ts";
import CreateDepartment from "./create";

const Departments = () => {
  const { columns, rows, handleEdit, handleDelete } = useDepartments();
  return (
    <RootLayout>
      {/*  create*/}
      <CreateDepartment />
      {/*<Link to={paths.departments.create}>Add New Department</Link>*/}
      <TableWithActions
        rows={rows}
        columns={columns}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </RootLayout>
  );
};
export default Departments;
