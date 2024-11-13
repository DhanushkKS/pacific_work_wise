import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name must be less than or equal to 50 characters"),

  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name must be less than or equal to 50 characters"),

  email: Yup.string().required("Email is required").email("Email is invalid"),

  //For Now avoid this
  // dateOfBirth: Yup.date()
  //     .required('Date of birth is required')
  //     .nullable()
  //     .max(new Date(), 'Date of birth cannot be in the future'),

  salary: Yup.number()
    .required("Salary is required")
    .min(1, "Salary must be at least $1")
    .positive("Salary must be a positive number"),

  departmentId: Yup.string()
    .required("Department is required")
    .matches(
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
      "Invalid Department ID format",
    )
    .min(36, "Department ID must be a valid GUID (36 characters)"),
});

export default validationSchema;
