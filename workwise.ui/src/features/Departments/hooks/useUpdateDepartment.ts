import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.tsx";
import { useUpdateDepartmentMutation } from "../../../redux/department/api.ts";
import { formDetails } from "../common/formDetails.ts";

const useUpdateDepartment = (id: string) => {
  const [updateDepartment] = useUpdateDepartmentMutation();

  const formik = useFormik({
    initialValues: {
      name: "dummy",
      code: "dummy",
    },
    onSubmit: async (values) => {
      console.log(values);
      await updateDepartment({ id: id, department: values });
    },
  });
  const { handleSubmit, handleChange } = formik;
  const renderInputField = (field: (typeof formDetails)[number]) => {
    return generateInputField(field, formik);
  };
  return { handleChange, handleSubmit, renderInputField };
};
export default useUpdateDepartment;
