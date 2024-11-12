export type column = {
  id:
    | "id"
    | "firstName"
    | "lastName"
    | "email"
    | "dateOfBirth"
    | "age"
    | "salary"
    | "departmentId";
  label: string;
  minWidth?: number;
  align?: "right";
};

export type rowData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  salary: number;
  departmentId: string;
  dateOfBirth: string;
};
export type Employee = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  salary: number;
  departmentId: string;
  dateOfBirth: string;
};
