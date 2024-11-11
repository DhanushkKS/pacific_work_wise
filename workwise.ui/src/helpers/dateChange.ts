const dateChangeHandler = (formik, newDate, name) => {
  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0"); // January is 0!
  const year = newDate.getFullYear();

  const isoDate = `${year}-${month}-${day}`;
  formik.setFieldValue(`${name}`, isoDate);
};
export default dateChangeHandler;
