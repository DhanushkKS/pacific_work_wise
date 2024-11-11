import { column, rowData } from "../types/types.ts";
import { useNavigate } from "react-router-dom";
import { useGetAllDepartmentsQuery } from "../../../redux/department/api.ts";

const useDepartments = () => {
  const { data } = useGetAllDepartmentsQuery({});
  console.log("All depts", data);
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
  // const handleEdit = (id:string) => {
  //   console.log("Edit clicked for row:", id);
  //   navigate(`${paths.departments.update}/${id}`, { replace: true });
  // };
  //
  // const handleDelete = (id:string) => {
  //   console.log("Delete clicked for row:", id);
  // };
  return { columns, rows };
};
export default useDepartments;
