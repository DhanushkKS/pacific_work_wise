import { column, rowData } from "../types/types.ts";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../paths.ts";

const useDepartments = () => {
  const navigate = useNavigate();
  const columns: column[] = [
    {
      id: "id",
      label: "Id",
    },
    { id: "name", label: "Name" },
    { id: "code", label: "Code" },
    // { id: "actions", label: "Actions" },
  ];

  //TODO: Rows should be removed when fetch real data from api
  const rows: rowData[] = [
    {
      id: "deferdfe",
      code: "cs",
      name: "CS dep",
    },
  ];
  const handleEdit = (id) => {
    console.log("Edit clicked for row:", id);
    navigate(`${paths.departments.update}/${id}`, { replace: true });
    // Handle edit logic here
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for row:", id);
    // Handle delete logic here
  };
  return { columns, rows, handleDelete, handleEdit };
};
export default useDepartments;
