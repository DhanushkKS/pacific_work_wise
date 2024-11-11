import { Box, Button, Grid, Grid2, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <>
      <Box
        display="flex"
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        sx={{
          background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          p={4}
          sx={{
            bgColor: "none",

            borderRadius: 1,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            sx={
              {
                // border: "solid 1px ",
              }
            }
          >
            WorkWise
          </Typography>
          <Typography variant="h3" color="textSecondary" gutterBottom>
            Elevate Your Workspace, Elevate Your Success
          </Typography>

          <Grid2
            container
            spacing={5}
            // sx={{ border: "solid 1px" }}
            display="flex"
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Button variant="contained" color="secondary">
              Manage Departments
            </Button>
            <Button variant="contained" color="primary">
              Manage Employees
            </Button>
          </Grid2>
        </Box>
      </Box>
    </>
  );
};
export default Home;
