import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.tsx";
import { useGetAllDepartmentsQuery } from "../../../redux/department/api.ts";
import { formDetails } from "../common/formDetails.ts";
import {
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} from "../../../redux/employee/api.ts";
import { useEffect, useState } from "react";
import validationSchema from "../validationSchema/validationSchema.ts";

const useUpdateEmployee = (id: string) => {
  const [isFormUpdated, setIsFormUpdated] = useState(false); // Track if the form is already updated with data
  console.log("id", id);
  const { data: departments } = useGetAllDepartmentsQuery({});
  const { data: employee } = useGetEmployeeByIdQuery({ id });

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
    validationSchema,
    onSubmit: async (values) => {
      // Create a new object with the hardcoded dateOfBirth value
      const formattedValues = {
        ...values,
        dateOfBirth: "1999-11-12T06:50:43.367Z", // Hardcoded for now
      };
      await updateEmployee({ id, employee: formattedValues });
    },
  });

  useEffect(() => {
    if (employee && !isFormUpdated) {
      formik.setValues({
        firstName: employee.firstName ?? "",
        lastName: employee.lastName ?? "",
        email: employee?.email ?? "",
        dateOfBirth: null,
        salary: employee?.salary ?? "",
        departmentId: employee?.departmentId ?? "",
      });
      setIsFormUpdated(true);
    }
  }, [employee, formik, isFormUpdated]);

  const { handleSubmit, handleChange } = formik;
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
export default useUpdateEmployee;
