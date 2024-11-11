import FormModal from "../../../components/Forms/FormModal.tsx";
import useCreateDepartment from "../hooks/useCreateDepartment.ts";
import { formDetails } from "../common/formDetails.ts";
import { Grid } from "@mui/material";
import PrimaryDetailsContainer from "../../../components/Forms/PrimaryDetailsContainer.tsx";

const CreateDepartment = () => {
  const { renderInputField, handleSubmit, handleChange } =
    useCreateDepartment();
  return (
    <>
      <FormModal buttonTitle="Add new Department">
        <PrimaryDetailsContainer
          onSubmit={handleSubmit}
          title="Add New Department"
        >
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
export default CreateDepartment;
