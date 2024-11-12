import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.tsx";
import {
  useGetDepartmentByIdQuery,
  useUpdateDepartmentMutation,
} from "../../../redux/department/api.ts";
import { formDetails } from "../common/formDetails.ts";
import { useEffect, useState } from "react";

const useUpdateDepartment = (id: string) => {
  const [isFormUpdated, setIsFormUpdated] = useState(false); // Track if the form is already updated with data
  const { data } = useGetDepartmentByIdQuery({ id });
  const [updateDepartment] = useUpdateDepartmentMutation();

  const formik = useFormik({
    initialValues: {
      code: "",
      name: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      await updateDepartment({ id: id, department: values });
    },
  });

  useEffect(() => {
    if (data && !isFormUpdated) {
      formik.setValues({
        name: data.name ?? "",
        code: data.code ?? "",
      });
      setIsFormUpdated(true);
    }
  }, [data, formik, isFormUpdated]);

  const { handleSubmit, handleChange } = formik;
  const renderInputField = (field: (typeof formDetails)[number]) => {
    return generateInputField(field, formik);
  };
  return { handleChange, handleSubmit, renderInputField };
};
export default useUpdateDepartment;
