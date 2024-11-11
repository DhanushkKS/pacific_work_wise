import TextField from "@mui/material/TextField";

const generateInputField = (input, formik) => {
  return (
    <TextField
      key={input.key}
      type={input.type}
      label={input.label}
      name={input.name}
      required={input.required}
      multiline={input.multiline}
      rows={input.rows}
      disabled={input.disabled}
      fullWidth
      value={formik.values[input.name]}
      onChange={formik.handleChange}
      error={formik.errors[input.name] && formik.touched[input.name]}
      helperText={
        formik.errors[input.name] &&
        formik.touched[input.name] &&
        formik.errors[input.name]
      }
    />
  );
};
export default generateInputField;
