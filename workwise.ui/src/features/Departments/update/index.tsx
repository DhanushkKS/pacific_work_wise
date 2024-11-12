import FormModal from "../../../components/Forms/FormModal.tsx";
import { formDetails } from "../common/formDetails.ts";
import { Grid } from "@mui/material";
import PrimaryDetailsContainer from "../../../components/Forms/PrimaryDetailsContainer.tsx";
import useUpdateDepartment from "../hooks/useUpdateDepartment.ts";

const UpdateDepartment = ({ id }) => {
  const { renderInputField, handleSubmit, handleChange } =
    useUpdateDepartment(id);
  return (
    <>
      <FormModal buttonTitle="Update">
        <PrimaryDetailsContainer onSubmit={handleSubmit} title="Update">
          <Grid container spacing={0} mt={2} gap={4}>
            {formDetails.map(({ xs, md, sm, ...item }) => (
              //TODO: This should be wrapped with grid2
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
export default UpdateDepartment;
