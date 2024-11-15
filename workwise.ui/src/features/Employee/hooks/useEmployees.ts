import { column, rowData } from "../types/types.ts";
import { useGetAllEmployeesQuery } from "../../../redux/employee/api.ts";

const useEmployees = () => {
  const { data } = useGetAllEmployeesQuery({});
  const columns: column[] = [
    { id: "id", label: "Id" },
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "email", label: "Email" },
    { id: "dateOfBirth", label: "Date of Birth" },
    { id: "age", label: "Age" },
    { id: "departmentId", label: "Department Id" },
  ];
  const employeeData: rowData[] = data;
  const rows: rowData[] = employeeData;

  return { columns, rows };
};
export default useEmployees;
