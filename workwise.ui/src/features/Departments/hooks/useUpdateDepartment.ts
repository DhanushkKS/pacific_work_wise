import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.tsx";

const useUpdateDepartment = () => {
  const formik = useFormik({
    initialValues: {
      name: "dummy",
      code: "dummy",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { handleSubmit, handleChange } = formik;
  const renderInputField = (field) => {
    return generateInputField(field, formik);
  };
  return { handleChange, handleSubmit, renderInputField };
};
export default useUpdateDepartment;
