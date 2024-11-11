import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.tsx";
import {
  useCreateDepartmentMutation,
  useGetAllDepartmentsQuery,
} from "../../../redux/department/api.ts";
import { formDetails } from "../common/formDetails.ts";
import { useCreateEmployeeMutation } from "../../../redux/employee/api.ts";

const useCreateEmployee = () => {
  const { data } = useGetAllDepartmentsQuery({});
  const departments = data;
  const renderInputField = (field: (typeof formDetails)[number]) => {
    let options = [...(field.options || [])];

    const item = { ...field };

    if (item.name === "departmentId") options = departments;

    return generateInputField(item, formik, options);
  };

  const [createEmployee, { isLoading }] = useCreateEmployeeMutation();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      salary: 0,
      departmentId: "",
    },

    onSubmit: async (values) => {
      await createEmployee(values);
    },
  });
  const { handleSubmit, handleChange } = formik;

  return { handleChange, handleSubmit, renderInputField, isLoading };
};
export default useCreateEmployee;
