import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.tsx";
import { useGetAllDepartmentsQuery } from "../../../redux/department/api.ts";
import { formDetails } from "../common/formDetails.ts";
import { useUpdateEmployeeMutation } from "../../../redux/employee/api.ts";

const useUpdateEmployee = (id: string) => {
  const { data } = useGetAllDepartmentsQuery({});
  const departments = data;
  const renderInputField = (field: (typeof formDetails)[number]) => {
    let options = [...(field.options || [])];

    const item = { ...field };

    if (item.name === "departmentId") options = departments;

    return generateInputField(item, formik, options);
  };

  const [updateEmployee, { isLoading }] = useUpdateEmployeeMutation();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: null,
      salary: 0,
      departmentId: "",
    },

    onSubmit: async (values) => {
      await updateEmployee({ id: id, employee: values });
    },
  });
  const { handleSubmit, handleChange } = formik;

  return { handleChange, handleSubmit, renderInputField, isLoading };
};
export default useUpdateEmployee;
