import { column, rowData } from "../types/types.ts";
import { useNavigate } from "react-router-dom";
import { useGetAllDepartmentsQuery } from "../../../redux/department/api.ts";
import { useGetAllEmployeesQuery } from "../../../redux/employee/api.ts";

const useEmployees = () => {
  const { data } = useGetAllEmployeesQuery({});
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

  return { columns, rows };
};
export default useEmployees;
