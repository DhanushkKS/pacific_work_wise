import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.tsx";
import { useGetAllDepartmentsQuery } from "../../../redux/department/api.ts";
import { formDetails } from "../common/formDetails.ts";
import { useCreateEmployeeMutation } from "../../../redux/employee/api.ts";

const useCreateEmployee = () => {
  const { data } = useGetAllDepartmentsQuery({});
  const departments = data || [];

  const [createEmployee, { isLoading }] = useCreateEmployeeMutation();

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
      const formattedValues = {
        ...values,
        dateOfBirth: "1999-11-12T06:50:43.367Z", //Hardcoded for now, here have some issues with MUI DatePicker :(
      };
      await createEmployee(formattedValues);
    },
  });

  const { handleSubmit, handleChange } = formik;
  // Render input field (for department dropdown)
  const renderInputField = (field: (typeof formDetails)[number]) => {
    let options = [...(field.options || [])];

    const item = { ...field };
    // If the field is for departmentId, populate options with department data
    if (item.name === "departmentId") {
      options =
        departments?.map((department: any) => ({
          value: department.id,
          label: department.name,
        })) || [];
    }

    return generateInputField(item, formik, options);
  };

  return { handleChange, handleSubmit, renderInputField, isLoading };
};

export default useCreateEmployee;
