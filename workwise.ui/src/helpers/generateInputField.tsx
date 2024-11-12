import TextField from "@mui/material/TextField";
import { INPUT_TYPES } from "../constants.ts";
import { Box, Chip, MenuItem } from "@mui/material";
import { DatePicker, DesktopDatePicker } from "@mui/x-date-pickers";
import dateChangeHandler from "./dateChange.ts";

const generateInputField = (input, formik, options = [], maxDate) => {
  if (input.type === INPUT_TYPES.DATE) {
    return (
      <DatePicker
        key={input.key}
        label={input.label}
        name={input.name}
        value={formik.values[input.name] || null}
        maxDate={maxDate}
        disabled={input.disabled}
        onChange={(newValue) => dateChangeHandler(formik, newValue, input.name)}
        renderInput={(params) => (
          <TextField
            required={input.required}
            fullWidth
            {...params}
            error={formik.errors[input.name] && formik.touched[input.name]}
            helperText={
              formik.errors[input.name] &&
              formik.touched[input.name] &&
              formik.errors[input.name]
            }
          />
        )}
      />
    );
  }

  if (input.type === INPUT_TYPES.SELECT) {
    const selectValue = input.multiple
      ? Array.isArray(formik.values[input.name])
        ? formik.values[input.name]
        : []
      : formik.values[input.name];
    console.log("oppp", options);
    return (
      <TextField
        key={input.key}
        fullWidth
        required={input.required}
        label={input.label}
        name={input.name}
        disabled={input.disabled}
        onChange={formik.handleChange}
        select
        SelectProps={{
          multiple: input.multiple,
          ...(input.multiple && {
            renderValue: (selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {Array.isArray(selected) &&
                  selected.map((value) => (
                    <Chip
                      key={value}
                      label={options.find((o) => o.value === value)?.label}
                    />
                  ))}
              </Box>
            ),
          }),
        }}
        value={selectValue}
        error={formik.errors[input.name] && formik.touched[input.name]}
        helperText={
          formik.errors[input.name] &&
          formik.touched[input.name] &&
          formik.errors[input.name]
        }
      >
        <MenuItem value={0} disabled>
          Select
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }

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
