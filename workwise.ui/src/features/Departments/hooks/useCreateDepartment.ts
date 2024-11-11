import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.tsx";

const useCreateDepartment = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
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
export default useCreateDepartment;
