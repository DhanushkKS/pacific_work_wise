import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.tsx";
import { useCreateDepartmentMutation } from "../../../redux/department/api.ts";
import { formDetails } from "../common/formDetails.ts";

const useCreateDepartment = () => {
  const [createDepartment, { isLoading }] = useCreateDepartmentMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
    },

    onSubmit: async (values) => {
      await createDepartment(values);
    },
  });
  const { handleSubmit, handleChange } = formik;
  const renderInputField = (field: (typeof formDetails)[number]) => {
    return generateInputField(field, formik);
  };
  return { handleChange, handleSubmit, renderInputField, isLoading };
};
export default useCreateDepartment;
