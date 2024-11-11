import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { ReactNode } from "react";

type PrimaryDetailsContainerProps = {
  onSubmit: () => void; // or (event: React.FormEvent<HTMLFormElement>) => void, if it’s used as a form handler
  title: string;
  children: ReactNode;
};

const PrimaryDetailsContainer = ({
  onSubmit,
  title,
  children,
}: PrimaryDetailsContainerProps) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <DialogTitle variant="h5" mt={2}>
          {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Grid
            container
            spacing={0}
            mr={2}
            mb={4}
            display="flex"
            justifyContent="flex-end"
          >
            <Button type="submit" variant="contained">
              {title}
            </Button>
          </Grid>
        </DialogActions>
      </form>
    </>
  );
};
export default PrimaryDetailsContainer;
