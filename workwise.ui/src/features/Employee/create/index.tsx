import FormModal from "../../../components/Forms/FormModal.tsx";
import { formDetails } from "../common/formDetails.ts";
import { Grid } from "@mui/material";
import PrimaryDetailsContainer from "../../../components/Forms/PrimaryDetailsContainer.tsx";
import useCreateEmployee from "../hooks/useCreateEmployee.ts";

const CreateEmployee = () => {
  const { renderInputField, handleSubmit, isLoading } = useCreateEmployee();
  return (
    <>
      <FormModal buttonTitle="Add new Employee">
        <PrimaryDetailsContainer
          onSubmit={handleSubmit}
          title="Add New Employee"
          isLoading={isLoading}
        >
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
export default CreateEmployee;
