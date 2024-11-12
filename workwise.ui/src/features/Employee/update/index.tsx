import useUpdateEmployee from "../hooks/useUpdateEmployee.ts";
import FormModal from "../../../components/Forms/FormModal.tsx";
import PrimaryDetailsContainer from "../../../components/Forms/PrimaryDetailsContainer.tsx";
import { Grid } from "@mui/material";
import { formDetails } from "../common/formDetails.ts";

//TODO: Same component in Create and Update. Should refactor later to common component...
const UpdateEmployee = ({ id }) => {
  const { renderInputField, handleSubmit, handleChange } =
    useUpdateEmployee(id);
  return (
    <>
      <FormModal buttonTitle="Update">
        <PrimaryDetailsContainer onSubmit={handleSubmit} title="Update">
          <Grid container spacing={0} mt={2} gap={4}>
            {formDetails.map(({ xs, md, sm, ...item }) => (
              <Grid key={item.key} xs={xs} sm={sm} md={md} component="div">
                {renderInputField(item)}
              </Grid>
            ))}
          </Grid>
        </PrimaryDetailsContainer>
      </FormModal>
    </>
  );
};
export default UpdateEmployee;
