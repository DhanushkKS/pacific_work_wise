import { column, rowData } from "../types/types.ts";
import { useGetAllDepartmentsQuery } from "../../../redux/department/api.ts";

const useDepartments = () => {
  const { data } = useGetAllDepartmentsQuery({});
  const columns: column[] = [
    {
      id: "id",
      label: "Id",
    },
    { id: "name", label: "Name" },
    { id: "code", label: "Code" },
  ];
  const departmentData: rowData[] = data;
  const rows: rowData[] = departmentData;
  return { columns, rows };
};
export default useDepartments;
