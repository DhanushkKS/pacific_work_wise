import RootLayout from "../../layouts/RootLayout.tsx";
import TableWithActions from "../../components/TableWithActions.tsx";
import useDepartments from "./hooks/useDepartments.ts";
import { Link } from "react-router-dom";
import { paths } from "../../paths.ts";

const Departments = () => {
  const { columns, rows, handleEdit, handleDelete } = useDepartments();
  return (
    <RootLayout>
      All deps
      <Link to={paths.departments.create}>Add New Department</Link>
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
